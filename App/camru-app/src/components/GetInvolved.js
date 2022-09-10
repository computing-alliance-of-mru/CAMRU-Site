//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import Reaptcha from 'reaptcha';
import Navbar from './Navbar.js';
import Waves from '../animated-components/Wave.js';
import Footer from "./Footer.js";
import Discord from "./Discord.js";
import Events from "./Events.js";
import VantaTopology from "../VantaJS-animated/VantaTopology";
import WorkInProgress from "./WorkInProgress.js";
import TypeAnimation from 'react-type-animation';


const GetInvolved = (props) => {

   
  let [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");

  useEffect(() => {
    if (searchParams.getAll("id")[0] !== undefined) {
      fetch(`${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/name?id=${searchParams.getAll("id")[0]}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setName(" " + data.status);
      });
    }
      
  });

  let underConstruction = process.env.REACT_APP_UNDER_CONSTRUCTION_GET_INVOLVED;
  if(!(props.isLoggedIn || (!(underConstruction === "True" || underConstruction === undefined) && !props.isLoggedIn))) {
    return(
      <div>
        <WorkInProgress />
      </div>
    )
  } else {
    return (
      <div className="w-full h-[100vh]">
        <Navbar isLoggedIn={props.isLoggedIn}/>
        <div className="absolute top-0 w-full -z-10">
          <VantaTopology />
        </div>
        <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between align-middle">
          <div className="bg-[#023048] p-4 border-b-2 border-[#0f7ca7]">
              <h1 className="items-center font-bold text-white text-7xl">
              Welcome{name}!
              </h1>
              <h3 className=" items-center font-bold text-white text-2xl pt-3 pl-5">
              to the Computing Alliance of Mount Royal University
              </h3>
          </div>

          <div className="flex-grow m-4 relative flex flex-col align-middle">
            <h5 className=" items-center font-bold text-white text-3xl text-center pb-6 underline">
            Get Involved
            </h5>
            <div className="grid gap-3 grid-cols-[300px_1fr] max-w-[1200px]">
              {/* <Discord /> */}
              <div className="w-[80vw] h-[40px] realitive flex-grow mt-10">
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    'Under Construction.',
                    2000,
                    "Check Back Soon.",
                    2000,
                  ]}
                  speed={40}
                  wrapper="div"
                  repeat={Infinity}
                  className={"text-3xl font-bold text-white px-8"}
                />
              </div>
            </div>
          </div>
          <Footer />
          <div></div>
        </div>
        
      </div>
      
    );
  }
};


export default GetInvolved;