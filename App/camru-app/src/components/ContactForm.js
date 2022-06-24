//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha

import React, { useEffect, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = (prop) => {
  const recaptchaRef = React.useRef();
  const [status, setStatus] = useState("Submit");
  const [submitting, setSubmitting] = useState(false);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const captchaToken = recaptchaRef.current.getValue();
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
    <div class="w-full max-w-lg">
      <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">Name:</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" required />
        </div>
        <div class="mb-4">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email:</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" required />
        </div>
        <div>
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">Message:</label>
          <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"id="message" required />
        </div>
        <div class="mb-4">
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
            ref={recaptchaRef}
            theme="dark"
          />
        </div>
        <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" disabled={submitting}>{status} </button>
      </form>
    </div>
  );
};


export default ContactForm;