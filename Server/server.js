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


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });


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



router.post('/contact', async (req, res) => {

    const human = await validateHuman(req.body.token);
    //console.log(req)
    // Email Template

    // Alert if successfully sending email
    if (!human) {
        res.status(400);
        res.json({ status: "Human validation failed!!" });
        return;
    }

    console.log("Human validation success!!")

    const output = `
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;
    // Alert if failed to sending email


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

    //check if email is already in use
    //note does have protection against sql injection
    cnn.query('SELECT * FROM users WHERE email = ?', [req.body.email], function (error, results, fields) {

    });


    let token = encodeRegistrationToken();



    res.json({ status: "Welcome To Camru!" });
});


router.post('/verify', async (req, res) => {
    let decoded = jwt.verify(token, process.env.REACT_APP_USER_SECRET_KEY);
});


router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/controlPanel',
    failureRedirect: 'http://localhost:3000/admin',
}));

router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.get('/database/execs', async (req, res) => {
    cnn.query('SELECT * FROM ExecutiveTeam where active = 1 order by priority desc', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

// protected route
router.get('/controlPanel', (req, res) => {
    // check if user is authenticated
    if (req.isAuthenticated()) {
        res.json({ status: "Welcome To Camru!" });
    } else {
        res.json({ status: "Not Authenticated" });
    }

});


// testing



router.post("/login", (req, res, next) => {
    console.log(req.body);
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
router.post("/register", (req, res) => {
    console.log(req.body); 
 });


 router.get("/user", (req, res) => {

    // load the user html page
    res.sendFile(path.join(__dirname, "../public/user.html"));

    if (req.isAuthenticated()) {
        res.send(req.user);
    } else {
        res.send("Not Authenticated");
    }
    
 });