//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Reaptcha from 'reaptcha';
import Navbar from './Navbar.js';
import VantaNet from "../VantaJS-animated/VantaNet.js";


const Signup = (prop) => {
  const recaptchaRef = React.useRef(null);
  const [status, setStatus] = useState("Submit");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-black");
  
  
  let capchaToken = 'none';
  let isVerified = false; 
  let emailRegex = "^[a-z]{5}[0-9]{3}@mtroyal.ca$";

  useEffect(() => {
    if(message === "Welcome To Camru!" ){
      setMessageColor("text-[#00b1ff]")
    } else {
      setMessageColor("text-red-500")
    }
  });

  const onVerify = recapchaToken => {
    isVerified = true;
    capchaToken = recapchaToken;
    handlePost(document.getElementById('signup-form'));
  }

  const onExpire = key => {
    isVerified = false;
    capchaToken = 'none';
  }

  const onClick = async (e) => {
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await recaptchaRef.current?.execute();
  }
  
  const handlePost = async (e) => {
    
    recaptchaRef.current?.reset();

    const { fname, lname, program, email, year} = e.elements;
    console.log(e.elements);
    let details = {
      first: fname.value,
      last: lname.value,
      program: program.value,
      year: year.value,
      email: email.value,
      token: capchaToken,
    };
    
    let response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    }).catch((error) => {
      setMessage("Failed to connect to server");
    });
    let result = await response.json();
    setMessage(result.status);
    console.info(result.token);
    console.info(result.decoded);
    console.log(result.error ? result.error : result.status);
    e.reset();
  };

  return (
    <div className="w-full h-[100vh] relative">
      <Navbar />
      <VantaNet styles={"fixed h-[100vh]"}/>
      <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between">
        <div></div>
        <div className="w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] ml-[50%] translate-x-[-50%] py-8 max-w-[700px]">
            <h1 className="text-3xl font-bold text-center text-white underline">Sign Up</h1>
          <form onSubmit={handleSubmit} id="signup-form" className="px-6 py-6 flex flex-col">
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="fname">First Name:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-[#023048] focus:outline-[#00b1ff]" type="text" id="fname" required pattern="[A-Za-z]+"/>
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="lname">Last Name:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-[#023048] focus:outline-[#00b1ff]" type="text" id="lname" required pattern="[A-Za-z]+"/>
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="program">Program:</label>
              <select id="program" class="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-[#00b1ff] bg-[#023048]" required>
                <option value="" disabled selected hidden>Choose a program ...</option>
                <option value="CIS">Computer Information Systems</option>
                <option value="CS">Computer Science</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="program">Year:</label>
              <select id="year" class="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-[#00b1ff] bg-[#023048]" required>
                <option value="" disabled selected hidden>Current Year...</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4+">4th +</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="email">Email:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-[#00b1ff] bg-[#023048]" type="email" id="email" required pattern={emailRegex}/>
              <p className="text-center italic mt-0.5 text-white text-sm">MRU Email Only</p>
            </div>
            <p className={"text-s italic text-center font-semibold " + messageColor}>​{message}</p>
            <div className="mt-2 col-span-2 mx-auto">
              <button className="mt-2 sshadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:outline-[#00b1ff] text-white font-bold rounded w-32 text-xl py-3" type="submit" onClick={onClick}>Sign Up</button>
            </div>        
          </form>
        </div>
        <div></div>
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