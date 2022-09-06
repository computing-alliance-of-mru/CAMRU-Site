import express  from "express";
import fetch from 'node-fetch';
import cors from "cors" ;
import nodemailer from "nodemailer";
import config from '../config.js';
import mysql from 'mysql';
// jsonweb automatically adds a key that determines the time, but you can use any module
import jwt from 'jsonwebtoken';



const router = express.Router();

import dotenv from 'dotenv';
dotenv.config();

//https://owasp.org/www-pdf-archive/AppSecIL2016_NodeJS-Security_LiranTal.pdf
//https://www.namecheap.com/support/knowledgebase/article.aspx/1249/89/how-to-remotely-connect-to-a-mysql-database-located-on-our-shared-server/
let cnn = mysql.createConnection({
    host:  config.sql_host,
    port: config.sql_port,
    user: config.sql_user,
    password: config.sql_pass,
    database: config.sql_database,
});



cnn.connect(function(err) {
    if (err) {
        console.error('error connecting to database ');
        return;
    }
    console.log('connected as id ' + cnn.threadId);
});


function encodeRegistrationToken(userId)
{
    // The information we need to find our user in the database (not sensible info)
    let info = {id: userId};

    // The hash we will be sending to the user
    const token = jwt.sign(info, process.env.REACT_APP_USER_SECRET_KEY);

    return token;
}

function decodeRegistrationToken(token)
{   
    let decoded = jwt.verify(token, process.env.REACT_APP_USER_SECRET_KEY);

    let userId = decoded.id;

    // Check that the user didn't take too long
    let dateNow = new Date();
    let tokenTime = decoded.iat * 1000;

    // six hours
    let hours = 6;
    let tokenLife = hours * 60 * 1000;

    // User took too long to enter the code
    if (tokenTime + tokenLife < dateNow.getTime())
    {
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
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Server Running"));


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
        host:  config.email_host,
        port: config.email_port,
        secure: false,
        auth: {
            user: config.email_user,
            pass: config.email_pass,
        },
        tls:{
            rejectUnauthorized:false,
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
        host:  config.email_host,
        port: config.email_port,
        secure: false,
        auth: {
            user: config.email_user,
            pass: config.email_pass,
        },
        tls:{
            rejectUnauthorized:false,
        },
    });
    
    
    let member = { name: `${req.body.first} ${req.body.last}`, email: `${req.body.email}`, Program: `${req.body.program}`, CurrentYear: `${req.body.year}`};
    await cnn.query('SELECT * FROM MailingList where Email=?', req.body.email, function (error, results, fields) {
        if (error) throw error;
        if(results.length == 0) {
            cnn.query('INSERT INTO MailingList SET ?', member, function (error, results, fields) {
                if (error) throw error;
                let userID = results.insertId || 9999;
                let token = encodeRegistrationToken(userID);
                //send email
                let link = `http://localhost:5000/verify?id=${token}`;
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
            if(results[0].verified == 1) {
                res.json({ status: "Email already exists" });
            } else {
                let userID = results[0].ID;
                let token = encodeRegistrationToken(userID);
                //send email
                let link = `http://localhost:5000/verify?id=${token}`;
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
            }
        }
    }); 

});


router.get('/verify', async (req, res) => {

    let token = decodeRegistrationToken(req.query.id);
    if (token.expired) {
        res.redirect('http://localhost:3000/Expired');
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





router.get('/database/execs', async (req, res) => {
    cnn.query('SELECT * FROM ExecutiveTeam where active = 1 order by priority desc', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

