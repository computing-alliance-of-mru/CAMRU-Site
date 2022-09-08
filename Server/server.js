import express from "express";
import session from 'express-session';
import bodyParser from "body-parser";
import fetch from 'node-fetch';
import cors from "cors";
import nodemailer from "nodemailer";
import config from '../config.js';
import mysql from 'mysql';
// jsonweb automatically adds a key that determines the time, but you can use any module
import jwt from 'jsonwebtoken';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import crypto from 'crypto';
import cookieParser from "cookie-parser";
import multer from "multer";

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        // split the original file name by the dot
        let splitName = file.originalname.split('.');
        let currentDate = new Date();
        let time = currentDate.toISOString().split('T')[1]
        time = time.replace(/:/g, '-');
        cb(null, splitName[0] + '-' + currentDate.toISOString().split('T')[0] + ' '+ time + '.' + splitName[1])
    }
})

const upload = multer({ storage: storage });



const router = express.Router();


import dotenv from 'dotenv';
dotenv.config();

//https://owasp.org/www-pdf-archive/AppSecIL2016_NodeJS-Security_LiranTal.pdf
//https://www.namecheap.com/support/knowledgebase/article.aspx/1249/89/how-to-remotely-connect-to-a-mysql-database-located-on-our-shared-server/
let cnn = mysql.createConnection({
    host: config.sql_host,
    port: config.sql_port,
    user: config.sql_user,
    password: config.sql_pass,
    database: config.sql_database,
});


cnn.connect(function (err) {

    if (err) {
        console.error('error connecting to database ');
        return;
    }
    console.log('connected as id ' + cnn.threadId);
});





function encodeRegistrationToken(userId) {
    // The information we need to find our user in the database (not sensible info)
    let info = { id: userId };

    // The hash we will be sending to the user
    const token = jwt.sign(info, process.env.REACT_APP_USER_SECRET_KEY);

    return token;
}

function decodeRegistrationToken(token) {
    let decoded = jwt.verify(token, process.env.REACT_APP_USER_SECRET_KEY);

    let userId = decoded.id;

    // Check that the user didn't take too long
    let dateNow = new Date();
    let tokenTime = decoded.iat * 1000;

    // six hours
    let hours = 6;
    let tokenLife = hours * 60 * 1000;

    // User took too long to enter the code
    if (tokenTime + tokenLife < dateNow.getTime()) {
        return {
            expired: true,
        };
    }

    // User registered in time
    return {
        userId
    };

}

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }

}));
app.use(cookieParser('keyboard cat'));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('session'));

app.use("/", router);

app.listen(5000, () => console.log("Server Running"));

// ---------------------------------- Passport ---------------------------------- //

passport.use(new LocalStrategy(function verify(username, password, cb) {
    console.log('username: ' + username);
    cnn.query('SELECT * FROM Users WHERE username = ?', [username], function (error, results, fields) {
        if (error) {
            return cb(error);
        }
        if (results.length === 0) {
            return cb(null, false, { message: 'Incorrect username or password.' });
        }
        const hash = crypto.pbkdf2Sync(password, results[0].Salt, 310000, 32, 'sha256');
        if (Buffer.compare(hash, results[0].Hash) === 0) {
            console.log('success');
            return cb(null, results[0]);
        } else {
            console.log('failure');
            return cb(null, false, { message: 'Incorrect username or password.' });
        }
    });
}));


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});


// ---------------------------------- CAPTCHA ---------------------------------- //

async function validateHuman(token) {
    const secret = process.env.REACT_APP_CAPTCHA_SECRET_KEY;
    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
        {
            method: "POST",
        }
    );
    const data = await response.json();
    return data.success;
}

// ---------------------------------- CONTACT EMAIL ---------------------------------- //

router.post('/contact', async (req, res) => {

    const human = await validateHuman(req.body.token);
    // Email Template
    const output = `
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    // Alert if successfully sending email
    if (!human) {
        res.status(400);
        res.json({ status: "Human validation failed!!" });
        return;
    }

    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: config.email_host,
        port: config.email_port,
        secure: false,
        auth: {
            user: config.email_user,
            pass: config.email_pass,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    console.log("Human validation success!!")



    // Setup email settings
    const mailOptions = {
        from: config.from,
        to: config.to,
        replyTo: req.body.email,
        subject: config.subject,
        html: output,
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json({ status: "Failed to Send Message", error: error });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});


// ---------------------------------- File Upload ---------------------------------- //

router.post('/addexec', upload.single("file"), uploadFiles);

function uploadFiles(req, res) {
    console.log("upload body: ")
    console.log(req.body);
    console.log("upload files: ")
    console.log(req.file);
    res.json({ message: "Successfully uploaded files" });
}

// ---------------------------------------------- Admin login stuff ----------------------------------------------



router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) console.log(err);
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) console.log(err);
                res.send("Successfully Authenticated");
                console.log("test:" + req.user);
            });
        }
    })(req, res, next);
});

router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.json({ status: "Logged Out" });
    });
});
router.post("/register", (req, res) => {
    console.log(req.body);
});


router.get("/user", (req, res) => {


    if (req.isAuthenticated()) {
        res.send(req.user);
    } else {
        res.send("Not Authenticated");
    }

});

// ------------------------------------------------------- Database stuff -------------------------------------------------------
router.get('/database/execs', async (req, res) => {
    cnn.query('SELECT * FROM ExecutiveTeam where active = 1 order by priority desc', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});


router.get('/verify', async (req, res) => {

    let token = decodeRegistrationToken(req.query.id);
    if (token.expired) {
        res.redirect('http://localhost:3000/Signup');
        return;
    }
    let userId = token.userId;

    cnn.query(`UPDATE MailingList SET verified = ? WHERE ID = ?`, [1, userId], function (error, results, fields) {
        if (error) {
            res.json({ status: "Error Updating Account" });
            throw error;
        }
        res.redirect('http://localhost:3000/Events');
    });

});

router.post('/signup', async (req, res) => {

    const human = await validateHuman(req.body.token);
    //console.log(req)
    // Email Template

    // Alert if successfully sending email
    if (!human) {
        res.status(400);
        res.json({ status: "Human validation failed!!" });
        return;
    }

    const transporter = nodemailer.createTransport({
        host: config.email_host,
        port: config.email_port,
        secure: false,
        auth: {
            user: config.email_user,
            pass: config.email_pass,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    
    console.log(req.body.role)
    let member = { name: `${req.body.first} ${req.body.last}`, email: `${req.body.email}`, role: `${req.body.role}`, Program: `${req.body.program}`, CurrentYear: `${req.body.year}`};

    await cnn.query('SELECT * FROM MailingList where Email=?', req.body.email, function (error, results, fields) {
        if (error) throw error;
        if (results.length == 0) {
            cnn.query('INSERT INTO MailingList SET ?', member, function (error, results, fields) {
                if (error) throw error;
                let userID = results.insertId || 9999;
                let token = encodeRegistrationToken(userID);
                //send email
                let link = `${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/verify?id=${token}`;
                const output = `
                <h3>Welcome To CAMRU</h3>
                <p>Hello,<br> Please Click on the link to verify your email.</p><br><a href="${link}">Click here to verify</a> 
                `;
                const mailOptions = {
                    from: config.singUp,
                    to: req.body.email,
                    subject: "Please confirm your Email account",
                    html: output,
                };
                // Send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        res.json({ status: "Failed to Sign Up", error: error });
                    } else {
                        res.json({ status: "Check your email to verify your account" });
                    }
                });

            });
        } else {
            console.log(results);
            if (results[0].verified == 1) {
                res.json({ status: "Email already exists" });
            } else {
                let userID = results[0].ID;
                let token = encodeRegistrationToken(userID);
                //send email
                let link = `${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/verify?id=${token}`;
                const output = `
                <h3>Welcome To CAMRU</h3>
                <p>Hello,<br> Please Click on the link to verify your email.</p><br><a href="${link}">Click here to verify</a> 
                `;
                const mailOptions = {
                    from: config.singUp,
                    to: req.body.email,
                    subject: "Please confirm your Email account",
                    html: output,
                };
                // Send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        res.json({ status: "Failed to send verification email", error: error });
                    } else {
                        res.json({ status: "Check your email to verify your account" });
                    }
                });
            }
        }
    });

});

// ------------------------------------------------------- API Stuff -------------------------------------------------------

router.get('/api/discord', async (req, res) => {
    const response = await fetch(`https://discord.com/api/guilds/492045394327371776?with_counts=true`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bot ${config.discord_token}`,
            }
        }
    );
    const data = await response.json();
    
    res.json(data);
});

router.get('/api/discord/count', async (req, res) => {
    const response = await fetch(`https://discord.com/api/guilds/492045394327371776?with_counts=true`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bot ${config.discord_token}`,
            }
        }
    );
    const data = await response.json();

    let count = {
        "approximate_member_count": data.approximate_member_count,
        "approximate_presence_count": data.approximate_presence_count
    }
    
    res.json(count);
});


