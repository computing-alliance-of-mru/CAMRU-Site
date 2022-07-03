//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Reaptcha from 'reaptcha';
import Navbar from './Navbar.js';
import Waves from '../animated-background/Wave.js';
import { compact } from "lodash";

const ContactForm = (prop) => {
  const recaptchaRef = React.useRef(null);
  const [status, setStatus] = useState("Submit");
  const [submitting, setSubmitting] = useState(false);
  const [varified, setVarified] = useState(false);
  const [capchaStatus, setCapchaStatus] = useState('normal');
  const [capchaToken, setCapchaToken] = useState('none');
  

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1200) {
        setCapchaStatus('compact');
      } else {
        setCapchaStatus('normal');
      }
      
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

  async function getToken() {
    setVarified(true);
    
    let res =  await recaptchaRef.current?.getResponse();
    console.log(res);
    let token = await res.then(token => { return token });
    console.log(token);
    return token;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!varified){
      alert('Please verify that you are not a robot');
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
    console.log(result.status);
    setSubmitting(false);
  };

  return (
    <div>
      <Waves/>
      <Navbar />
      <div class="relative w-[80%] md:w-[50%] lg:w-[40%] 2xl:w-[600px]  top-[50vh] mt-[10vh] left-[50%] translate-y-[-50vh] translate-x-[-50%] ">
        <form onSubmit={handleSubmit} class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl font-bold text-center text-gray-800">Cᴏɴᴛᴀᴄᴛ Us</h1>
          <div class="mb-4">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">Name:</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" required />
          </div>
          <div class="mb-4">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email:</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" required />
          </div>
          <div class="mb-4">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">Message:</label>
            <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-40 resize-none"id="message" required />
          </div>
          <div class=" flex flex-col xl:flex-row xl:justify-between items-center ">
            <div id = "recaptcha-contact" class="xl:mr-4">
              <Reaptcha 
                sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} 
                size={capchaStatus} 
                onVerify={onVerify}
                onExpire={onExpire}
                ref={recaptchaRef} 
                badge='inline'/>
            </div>
            <button class="mt-5 xl:ml-4 xl:mt-0 h-10 w-40 shadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" disabled={submitting}>{status} </button>
          </div>
          <p class="text-red-500 text-s italic" >ㅤ</p>
        </form>
        </div>
      </div>
    
  );
};


export default ContactForm;