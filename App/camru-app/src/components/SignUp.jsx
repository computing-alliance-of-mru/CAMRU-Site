//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Navbar from './Navbar.jsx';
import ReCAPTCHA from "react-google-recaptcha"
import VantaNet from "../VantaJS-animated/VantaNet.jsx";
import CheckBox from '../animated-components/Checkbox';
import SpinLoader from '../animated-components/SpinLoader';
import WorkInProgress from "./WorkInProgress";


const Signup = (props) => {
  const recaptchaRef = React.useRef(null);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-black");
  const [loading, setLoading] = useState(false);

  const [inputsYear, setInputsYear] = useState(false);
  const [inputsProgram, setInputsProgram] = useState(false);

  const helpQuestion = <path d="M45.999,8.427c-0.015-4.627-3.77-8.371-8.397-8.371H8.397c-2.232,0-4.372,0.889-5.947,2.469
  C0.874,4.106-0.008,6.25,0,8.481l0.071,22.284c0.015,4.628,3.77,8.29,8.398,8.29h8.294l3.922,5.705
  c0.529,0.76,1.396,1.253,2.321,1.255c0.925,0.002,1.793-0.508,2.326-1.265l3.969-5.695h8.373c2.231,0,4.371-0.807,5.947-2.387
  c1.576-1.582,2.458-3.684,2.45-5.916L45.999,8.427z M22.404,32.811c-1.747,0-2.934-1.286-2.934-3c0-1.748,1.22-3.001,2.934-3.001
  c1.781,0,2.936,1.253,2.968,3.001C25.372,31.524,24.185,32.811,22.404,32.811z M26.653,18.735
  c-1.331,1.475-1.618,2.879-1.618,4.499c0,1.203-0.976,2.18-2.179,2.18h-0.897c-1.191,0-2.161-0.957-2.179-2.146l-0.003-0.233
  c-0.108-1.836,0.504-3.75,2.123-5.693c1.152-1.369,2.088-2.543,2.088-3.767c0-1.26-0.828-2.099-2.627-2.171
  c-0.549,0-1.152,0.092-1.735,0.254c-1.068,0.298-2.181-0.307-2.511-1.367c-0.333-1.068,0.251-2.205,1.313-2.557
  c1.163-0.386,2.585-0.658,4.156-0.658c4.751,0,7.021,2.627,7.021,5.615C29.604,15.423,28.022,17.223,26.653,18.735z"/>

  const program = <div className="mb-4">
    <label className="block mb-2 font-bold tracking-wide text-white uppercase text-m" htmlFor="program">Program:</label>
    <select id="program" class="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-[#00b1ff] bg-[#023048]" required>
      <option value="0" disabled selected hidden>Choose a program ...</option>
      <option value="CIS">Computer Information Systems</option>
      <option value="CS">Computer Science</option>
      <option value="Other">Other</option>
    </select>
  </div>;

  const year = <div className="mb-4">
    <label className="block mb-2 font-bold tracking-wide text-white uppercase text-m" htmlFor="program">Year:</label>
    <select id="year" class="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-[#00b1ff] bg-[#023048]" required>
      <option value="0" disabled selected hidden>Current Year...</option>
      <option value="1">1st</option>
      <option value="2">2nd</option>
      <option value="3">3rd</option>
      <option value="4">4th +</option>
    </select>
  </div>;

  const loadSpinner =
    <button className="mt-2 sshadow bg-[#0f7ca7] text-white font-bold rounded w-32 text-xl py-3 h-14" type="submit" disabled>
      <SpinLoader />
    </button>;

  const submitButton =
    <button className="mt-2 sshadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:outline-[#00b1ff] text-white font-bold rounded w-32 text-xl py-3 h-14" type="submit">
      Sign Up
    </button>



  let capchaToken = 'none';
  let isVerified = false;
  let emailRegex = '\\S+@mtroyal.ca[\s]{0,3}';

  const handleRoleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Student") {
      setInputsYear(true);
      setInputsProgram(true);
    } else if (e.target.value === "Alumni") {
      setInputsProgram(true);
      setInputsYear(false);
    } else if (e.target.value === "Faculty") {
      setInputsYear(false);
      setInputsProgram(false);
    }
  }

  useEffect(() => {
    if (message === "Welcome To Camru!") {
      setMessageColor("text-[#00b1ff]")
    } else if (message === "Check your email to verify your account") {
      setMessageColor("text-[#ffffff]")
    } else {
      setMessageColor("text-red-500")
    }

    document.querySelector("#role")?.addEventListener("change", handleRoleChange);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await recaptchaRef.current?.execute();
  }

  const handlePost = async (e) => {

    recaptchaRef.current?.reset();
    setLoading(true);

    const { fname, lname, program, role, email, year } = e.elements;
    console.log(e.elements);
    let details = {
      first: fname.value,
      last: lname.value,
      role: role.value,
      program: program ? program.value : null,
      year: year ? year.value : null,
      email: email.value,
      token: capchaToken,
    };

    let response = await fetch(`${import.meta.env.VITE_SSL}://${import.meta.env.VITE_SERVER_HOST}/signup`, {
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
    setLoading(false);
  };


  return (
    <div className="w-full h-[100vh] relative">
      <Navbar />
      <VantaNet styles={"fixed h-[100vh]"} />

      <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between">
        <div></div>
        <div className="w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] ml-[50%] translate-x-[-50%] py-8 max-w-[700px]">
          <div className="">
            <h1 className="text-3xl font-bold text-center text-white underline">Sign Up</h1>
            <p className="text-white text-center mt-2">Receive Updates on Events and Other Opportunites</p>
          </div>
          <form onSubmit={handleSubmit} id="signup-form" className="flex flex-col px-6 py-6">
            <div className="mb-4">
              <label className="block mb-2 font-bold tracking-wide text-white uppercase text-m" htmlFor="fname">First Name:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-[#023048] focus:outline-[#00b1ff]" type="text" id="fname" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold tracking-wide text-white uppercase text-m" htmlFor="lname">Last Name:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-[#023048] focus:outline-[#00b1ff]" type="text" id="lname" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold tracking-wide text-white uppercase text-m" htmlFor="role">Role:</label>
              <select id="role" class="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-[#00b1ff] bg-[#023048]" required>
                <option value="" disabled selected hidden>Choose a Role ...</option>
                <option value="Student">Student</option>
                <option value="Alumni">Alumni</option>
                <option value="Faculty">Faculty</option>
              </select>
            </div>
            {inputsProgram ? program : null}
            {inputsYear ? year : null}
            <div className="mb-2">
              <label className="block mb-2 font-bold tracking-wide text-white uppercase text-m" htmlFor="email">Email:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-[#00b1ff] bg-[#023048]" type="email" id="email" required pattern={emailRegex} />
              <div className="flex justify-center mt-1 mb-3 align-middle hover:cursor-pointer">
                <p className="pr-2 text-sm italic text-center text-white">MRU Email Only</p>
              </div>
            </div>
            <div className="flex justify-center w-full">

              <CheckBox text={"Mailing List"} type={true} />

            </div>

            <p className={"text-s italic text-center font-semibold " + messageColor}>​{message}</p>
            <div className="col-span-2 mx-auto mt-2">
              {loading ? loadSpinner : submitButton}
            </div>
            <div className="flex justify-center pt-2">
              <Link to="/privacy">
                <a className="px-3 text-xs text-white">
                  Privacy
                </a>
              </Link>
              <Link to="/terms">
                <a className="px-3 text-xs text-white">
                  Terms
                </a>
              </Link>
            </div>
          </form>
        </div>
        <div></div>
        <div className="inline">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
            size="invisible"
            onChange={onVerify}
            onExpired={onExpire}
            ref={recaptchaRef}
            badge='bottomright' />
        </div>
      </div>

    </div>

  );

};


export default Signup;