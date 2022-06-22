import React, { useEffect, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = (prop) => {
  const recaptchaRef = React.useRef();
  const [status, setStatus] = useState("Submit");
  const [submitting, setSubmitting] = useState(false);
  const [isVarified, setVarified] = useState(false);


  const onSubmitWithReCAPTCHA = async (value) => {

    
    const secret = "6LeH4oMgAAAAAO6m_hHYQegqoM3qo2o_QJRYUNqG";
    const captchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${value}`,
      {
        method: "POST",
      }
      );
      const data = await captchaResponse.json();
      await console.log("response:" + data.success);
      
  }
    
    
  const handleSubmit = async (e) => {
    recaptchaRef.current.reset();
    setSubmitting(true);
    
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
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
    alert(result.status);
    setSubmitting(false);
  };

  return (
    <form 
    
    onSubmit={handleSubmit}
    
    >
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
        sitekey="6LeH4oMgAAAAAAIaFf-vYQyjHYmko2U8FVatxFOt"
        onChange={onSubmitWithReCAPTCHA}
      />
      <button type="submit" disabled={submitting}>{status} </button>
    </form>
  );
};


export default ContactForm;