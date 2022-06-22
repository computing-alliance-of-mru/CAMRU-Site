import React, { useEffect, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';



const ContactForm = (prop) => {
  const recaptchaRef = React.useRef();
  const [status, setStatus] = useState("Submit");
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const captchaToken = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    setSubmitting(true);
    
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      token: captchaToken,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    console.log(result.status);
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value="dylan" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value="email@email.ca" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" value="test" required />
      </div>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_CAPTCHA_TEST_SITE_KEY}
        ref={recaptchaRef}
        size="invisible"
        theme="dark"
      />
      <button type="submit" disabled={submitting}>{status} </button>
    </form>
  );
};


export default ContactForm;