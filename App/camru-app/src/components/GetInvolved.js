//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Reaptcha from 'reaptcha';
import Navbar from './Navbar.js';
import Waves from '../animated-components/Wave.js';
import Footer from "./Footer.js";
import Discord from "./Discord.js";
import Events from "./Events.js";
import VantaTopology from "../VantaJS-animated/VantaTopology";


const GetInvolved = (props) => {

  const [name, setName] = useState("");
  
  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="absolute top-0 w-full -z-10">
        <VantaTopology />
      </div>
      <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between align-middle">
        <div className="bg-[#023048] p-4 border-b-2 border-[#0f7ca7]">
            <h1 className="items-center font-bold text-white text-7xl">
            Welcome{name}!
            </h1>
            <h3 className=" items-center font-bold text-white text-2xl">
            to the Computing Alliance of Mount Royal University
            </h3>
        </div>

        <div className="flex-grow m-4 relative flex flex-col align-middle">
          <h5 className=" items-center font-bold text-white text-3xl text-center pb-6 underline">
          Get Involved
          </h5>
          <div className="grid gap-2 grid-cols-[300px_1fr] max-w-[1200px]">
            <Events />
            <Discord />
          </div>
        </div>
        <div></div>
      </div>
      
    </div>
    
  );
};


export default GetInvolved;