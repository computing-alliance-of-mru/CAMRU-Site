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

    

    res.json({ status: "Welcome To Camru!"});
});


router.post('/verify', async (req, res) => {
    let decoded = jwt.verify(token, process.env.REACT_APP_USER_SECRET_KEY);
});



