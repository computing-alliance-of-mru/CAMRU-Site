const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");



const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


  

router.post('/contact', (req, res) => {

    //console.log(req)
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


    // Alert if failed to sending email


    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'camru.ca', // Sender email smtp
        port: '26', // Sender email port
        secure: false,
        auth: {
          user: "contact@camru.ca",
          pass: "BeansOfKidney**",
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // Setup email settings
    const mailOptions = {
        from: '"CAMRU Contact Form" <contact@camru.ca>',
        to: 'contact@camru.ca',
        replyTo: req.body.email,
        subject: 'Contact Us',
        html: output,
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
          } else {
            console.log("Message Sent")
          }
    });
});

