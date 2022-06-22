import express  from "express";
import fetch from 'node-fetch';
import cors from "cors" ;
import nodemailer from "nodemailer";
import config from '../config.js';

const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


async function validateHuman(token) {
    const secret = process.env.REACT_APP_CAPTCHA_TEST_SECRET_KEY;
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
        host:  config.host,
        port: config.port,
        secure: false,
        auth: {
            user: config.user,
            pass: config.pass,
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
            res.json({ status: "" + error});
          } else {
            res.json({ status: "Message Sent" });
          }
    });
});

