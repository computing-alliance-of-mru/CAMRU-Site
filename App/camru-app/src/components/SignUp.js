//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Reaptcha from 'reaptcha';
import Navbar from './Navbar.js';
import VantaNet from "../VantaJS-animated/VantaNet.js";


const Signup = (props) => {
  const recaptchaRef = React.useRef(null);
  const [status, setStatus] = useState("Submit");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-black");
  const [submitting, setSubmitting] = useState(false);
  const [capchaStatus, setCapchaStatus] = useState('normal');
  
  let capchaToken = 'none';
  let isVerified = false; 
  let form = document.getElementById('contact-form');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 900) {
        setCapchaStatus('compact');
      } else {
        setCapchaStatus('normal');
      }      
    } 
    if(message === "Welcome To Camru!" ){
      setMessageColor("text-[#00b1ff]")
    } else {
      setMessageColor("text-red-500")
    }
    window.addEventListener('resize', handleResize)
  });

  const onVerify = recapchaToken => {
    isVerified = true;
    capchaToken = recapchaToken;
    handleSubmit(document.getElementById('signup-form'));
  }

  const onExpire = key => {
    isVerified = false;
    capchaToken = 'none';
  }

  const onClick = async (e) => {
    e.preventDefault();
    await recaptchaRef.current?.execute();
  }
  
  const handleSubmit = async (e) => {
    
    recaptchaRef.current?.reset();

    const { fname, lname, email } = e.elements;
    console.log(e.elements);
    let details = {
      first: fname.value,
      last: lname.value,
      email: email.value,
      token: capchaToken,
    };
    let response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    let result = await response.json();
    setMessage(result.status);
    console.info(result.token);
    console.info(result.decoded);
    console.log(result.error ? result.error : result.status);
    e.reset();
  };

  return (
    <div className="w-full h-[100vh]">
      <Navbar isLoggedIn={props.isLoggedIn}/>
      <VantaNet styles={"h-[100vh]"}/>
      <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between">
        <div></div>
        <div className="w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] ml-[50%] translate-x-[-50%] py-8 max-w-[700px]">
            <h1 className="text-3xl font-bold text-center text-white underline">Sign Up</h1>
          <form id="signup-form" className="px-6 py-6 flex flex-col">
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="fname">First Name:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#023048]" type="text" id="fname" required/>
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="lname">Last Name:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#023048]" type="text" id="lname" required/>
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="program">Program:</label>
              <select id="program" class="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#023048]" required>
                <option selected>Choose a program ...</option>
                <option value="CIS">Computer Information Systems</option>
                <option value="CS">Computer Science</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="program">Year:</label>
              <select id="year" class="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#023048]" required>
                <option selected>Current Year...</option>
                <option value="CIS">1st</option>
                <option value="CS">2nd</option>
                <option value="Other">3rd</option>
                <option value="CIS">4th +</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="email">Email:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#023048]" type="email" id="email" required/>
              <p className="text-center text-s italic mt-0.5 text-white">MRU Email Only</p>
            </div>
            <p className={"text-s italic text-center font-semibold " + messageColor}>​{message}</p>
            <div className="mt-2 col-span-2 mx-auto">
              <button className="mt-5 xl:ml-4 xl:mt-0 h-10 sshadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-[105px]" type="submit" onClick={onClick}>Sign Up</button>
            </div>        
          </form>
        </div>
        <div className="inline">
            <Reaptcha 
              sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} 
              size="invisible" 
              onVerify={onVerify}
              onExpire={onExpire}
              ref={recaptchaRef} 
              badge='bottomright'/>
        </div>
      </div>
      
    </div>
    
  );
};


export default Signup;