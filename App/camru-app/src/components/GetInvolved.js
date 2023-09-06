//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import Navbar from './Navbar.js';
import Footer from "./Footer.js";
import DiscordCAMRU from "./Discord_CAMRU.js";
import DiscordMRU from "./Discord_MRU.js";
import Events from "./Events.js";
import VantaCells from '../VantaJS-animated/VantaCells.js';
import GeometricGradient from "../animated-components/GeometricGradient.js";
import WorkInProgress from "./WorkInProgress.js";
import InvolvedSocials from "./InvolvedSocials.js";


const GetInvolved = (props) => {

   
  let [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(localStorage.getItem("name") || "");

  const getName = (e) => {
    //check local storage for name
    if (localStorage.getItem("name")) {
      setName(" " + localStorage.getItem("name"));
    } else {   
      let serachParam = searchParams.getAll("id")[0]
      //WWW WWW WWW

      if (serachParam !== undefined) {
        fetch(`${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/name?id=${serachParam}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.status.length <= 9 ) {
            localStorage.setItem("name", data.status);
            setName(" " + data.status);
          }
        });
      }
    }
    
  }

  const getEvents = () => {
      
  }

  useEffect(() => {
    getName();
    getEvents();
  });


    return (
      <div className="w-full h-[100vh]">
        <Navbar />
        <div className="absolute top-0 w-full -z-10">
          {/* <VantaTopology /> */}
          <GeometricGradient />
        </div>
        <div className="w-full flex flex-col relative justify-between align-middle sm:h-[calc(100vh-50px)]">
          <div className="p-4 border-b-2 bg-camru-blue border-camru-blue5">
              <h1 className="items-center text-4xl font-bold text-white sm:text-4xl max-w-[1060px] m-auto px-5">
              Welcome{name}!
              </h1>
              <h3 className="items-center pt-3 text-lg font-bold text-white sm:text-2xl max-w-[1060px] m-auto px-5">
              to the Computing Alliance of Mount Royal University
              </h3>
          </div>

          <div className="relative flex flex-col m-auto align-middle py-5">
            {/* <h3 className="items-center pb-6 text-3xl font-bold text-center text-white">
              Events
            </h3>
            <Events /> */}
            <h3 className="items-center py-5 text-3xl font-bold text-center text-white">
             Socials
            </h3>
            <div className="grid gap-5 sm:grid-cols-[4fr_3fr] grid-rows-[1fr_1fr] sm:grid-rows-[1fr]">
              <DiscordCAMRU />
              <InvolvedSocials />
            </div>
          </div>
          <div></div>
          <Footer />
        </div>
        
      </div>
      
    );
  
};


export default GetInvolved;