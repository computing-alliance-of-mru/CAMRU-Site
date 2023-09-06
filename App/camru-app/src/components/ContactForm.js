//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"
import Navbar from './Navbar.js';
import Waves from '../animated-components/Wave.js';
import Footer from "./Footer.js";

const ContactForm = (props) => {
  const recaptchaRef = React.useRef(null);
  const [status, setStatus] = useState("Submit");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-black");
  const [submitting, setSubmitting] = useState(false);
  const [varified, setVarified] = useState(false);
  const [capchaStatus, setCapchaStatus] = useState('normal');
  const [capchaToken, setCapchaToken] = useState('none');
  

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 900) {
        setCapchaStatus('compact');
      } else {
        setCapchaStatus('normal');
      }      
    } 
    if(message === "Message Sent" ){
      setMessageColor("text-[#00b1ff]")
    } else {
      setMessageColor("text-red-500")
    }
    window.addEventListener('resize', handleResize)
  });

  const onVerify = recaptchaResponse => {
    setVarified(true);
    setCapchaToken(recaptchaResponse);
  }

  const onExpire = recaptchaResponse => {
    setCapchaToken('none');
    setVarified(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!varified){
      setMessage('Please verify that you are not a robot');
      return;
    }
    recaptchaRef.current?.reset();
    setVarified(false);
    setSubmitting(true);

    setStatus("Sending...");
    console.log(e.target.elements);
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      token: capchaToken,
    };
    console.log(JSON.stringify(details));
    let response = await fetch(`${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    }).catch((error) => {
      setMessage("Failed to connect to server");
    });
    setStatus("Submit");
    let result = await response.json();
    setMessage(result.status);
    console.log(result.error ? result.error : result.status);
    setSubmitting(false);
    e.target.reset();
  };


    return (
      <div className="w-full h-[100vh]">
        <Navbar />
        <div className="absolute top-0 w-full -z-10">
          <Waves/>
        </div>
        <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between">
          <div></div>
          <div className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[40%] ml-[50%] translate-x-[-50%] py-8 max-w-[700px]">
            <form onSubmit={handleSubmit} className="bg-[#f0f0f0] shadow-lg rounded px-6 py-6">
            <h1 className="text-xl font-bold text-center text-gray-800">Cᴏɴᴛᴀᴄᴛ Us</h1>
              <div className="mb-4">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="name">Name:</label>
                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" id="name" placeholder="Optional" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="email">Email:</label>
                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="email" id="email" placeholder="Optional" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="message">Message:</label>
                <textarea className="block w-full h-40 px-4 py-3 mb-2 leading-tight text-white bg-gray-400 border border-gray-200 rounded appearance-none  no-resize focus:outline-none focus:bg-white focus:text-gray-600 focus:border-gray-500 resize-non"id="message" required maxlength="600"/>
              </div>
              <div className="flex flex-col items-center  xl:flex-row xl:justify-between">
                <div id = "recaptcha-contact" className="xl:mr-4">
                  <ReCAPTCHA 
                    sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} 
                    size={capchaStatus} 
                    onChange={onVerify}
                    onExpired={onExpire}
                    ref={recaptchaRef} 
                    badge='inline'/>
                </div>
                <button className="mt-5 xl:ml-4 xl:mt-0 h-10 w-40 shadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" disabled={submitting}>{status} </button>
              </div>
              <p className={"text-s italic text-center pt-3 font-semibold " + messageColor}>​{message}</p>
            </form>
          </div>
          <div className="bottom-0 w-full" > 
            <Footer />
          </div> 
        </div>
      </div>
      
    );
};


export default ContactForm;