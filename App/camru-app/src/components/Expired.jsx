//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from './Navbar';
import VantaNet from "../VantaJS-animated/VantaNet.jsx";
import CheckBox from '../animated-components/Checkbox';
import SpinLoader from '../animated-components/SpinLoader';
import WorkInProgress from "./WorkInProgress";


const Expired = (props) => {
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-black");
  const [loading, setLoading] = useState(false);
  let [heading, setHeading] = useState("Account Verification");

  const [inputsYear, setInputsYear] = useState(false);
  const [inputsProgram, setInputsProgram] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();


  const loadSpinner =
    <button className="mt-2 sshadow bg-[#0f7ca7] text-white font-bold rounded w-32 text-xl py-3 h-14" type="submit" disabled>
      <SpinLoader />
    </button>;

  const submitButton =
    <button className="mt-2 sshadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:outline-[#00b1ff] text-white font-bold rounded w-32 text-xl py-3 h-14" type="submit">
      Send Link
    </button>

  let emailRegex = "^[\S]+@mtroyal.ca[\s]{0,3}$";

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
    if (message === "Email not found, go Sign Up") {
      setMessageColor("text-[#00b1ff]")
    } else if (message === "Check your email to verify your account") {
      setMessageColor("text-[#ffffff]")
    } else {
      setMessageColor("text-red-500")
    }
    if (searchParams.getAll("reverify")[0] === 'true') {
      setHeading("Link Expired");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(e.elements);
    const { email } = e.target.elements;
    let details = {
      email: email.value,
    };
    console.log(JSON.stringify(details))

    let response = await fetch(`${import.meta.env.VITE_SSL}://${import.meta.env.VITE_SERVER_HOST}/reverify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    }).catch((error) => {
      setMessage("Failed to connect to server");
      setLoading(false);
    });
    let result = await response.json();
    setMessage(result.status);
    e.target.reset();
    setLoading(false);
  }


  return (
    <div className="w-full h-[100vh] relative">
      <Navbar />
      <VantaNet styles={"fixed h-[100vh]"} />

      <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between">
        <div></div>
        <div className="w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] ml-[50%] translate-x-[-50%] py-8 max-w-[700px]">
          <h1 className="text-3xl font-bold text-center text-white">{heading}</h1>

          <p className="pt-2 text-sm italic text-center text-white">enter your email to send verification link</p>
          <form onSubmit={handleSubmit} id="signup-form" className="flex flex-col px-6 py-6">
            <div className="mb-1">
              <label className="block mb-2 font-bold tracking-wide text-white uppercase text-m" htmlFor="email">Email:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-[#00b1ff] bg-[#023048]" type="email" id="email" required pattern={emailRegex} />
              <div className="flex justify-center mt-1 mb-3 align-middle hover:cursor-pointer">
                <p className="text-sm italic text-center text-white">MRU Email Only</p>
              </div>
            </div>
            <p className={"text-s italic text-center font-semibold " + messageColor}>​{message}</p>
            <div className="col-span-2 mx-auto mt-2">
              {loading ? loadSpinner : submitButton}
            </div>
          </form>
        </div>
        <div></div>
      </div>

    </div>

  );
};


export default Expired;