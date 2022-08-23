//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Reaptcha from 'reaptcha';
import Navbar from './Navbar.js';
import Waves from '../animated-components/Wave.js';
import { compact } from "lodash";
import Footer from "./Footer.js";
import Checkbox from "../animated-components/Checkbox.js";
import VantaNet from "../VantaJS-animated/VantaNet.js";

const ContactForm = (prop) => {
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

  const onVerify = async recaptchaResponse => {
    setVarified(true);
    await recaptchaRef.current?.getResponse().then(token => { 
      setCapchaToken(token);
    });
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
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      token: capchaToken,
    };
    console.log(JSON.stringify(details));
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    setMessage(result.status);
    console.error(result.error);
    setSubmitting(false);
  };

  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <VantaNet styles={"h-[100vh]"}/>
      <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between">
        <div></div>
        <div className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[40%] ml-[50%] translate-x-[-50%] py-8 max-w-[700px] bg-white shadow-lg rounded">
            <h1 className="text-xl font-bold text-center text-gray-800">Sign Up</h1>
          <form onSubmit={handleSubmit} className="px-6 py-6 grid grid-cols-2">
            <div className="mb-4 mr-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">First Name:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="fname" required />
            </div>
            <div className="mb-4 ml-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Last Name:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="lname" required />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" required />
              <p className="text-center text-s italic mt-0.5">MRU Email Only</p>
            </div>
            <div className="col-span-2 flex align-middle justify-center">
              <span className="block h-[2px] w-[100%] bg-gray-400 mt-3"></span>
              <span className="ml-2 text-gray-600">Notifications</span>
              <span className="mr-2 ml-0.5 text-gray-600">▼▲</span>
              <span className="block h-[2px] w-[100%] mt-3 bg-gray-400"></span>
            </div>
            <div>
              <label className="checkbox bounce flex">
                <input type="checkbox" id="Jobs" checked/>
                <svg viewBox="0 0 21 21">
                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
                <span className="pl-2">Job Postings</span>
              </label>
            </div>
            <div>
              <label className="checkbox bounce flex">
                <input type="checkbox" id="Events"/>
                <svg viewBox="0 0 21 21">
                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
                <span className="pl-2">Event Updates</span>
              </label>
            </div>
            <p className={"text-s italic text-center pt-3 font-semibold " + messageColor}>​{message}</p>
            <div className=" flex flex-col justify-between items-center col-span-2">
              <div id = "recaptcha-contact" className="xl:mr-4">
                <Reaptcha 
                  sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} 
                  size={capchaStatus} 
                  onVerify={onVerify}
                  onExpire={onExpire}
                  ref={recaptchaRef} 
                  badge='inline'/>
              </div>
            </div>
            <div className="mt-4 col-span-2 mx-auto">
              <button className="mt-5 xl:ml-4 xl:mt-0 h-10 sshadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-[105px]" type="submit" disabled={submitting}>Join Now </button>
            </div>
          </form>
        </div>
        <div className="w-full bottom-0" > 
          <Footer />
        </div> 
      </div>
      
    </div>
    
  );
};


export default ContactForm;