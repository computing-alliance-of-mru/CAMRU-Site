//creat component 
import React, { useEffect, useState } from "react";

import Footer from "./Footer.js";
import Navbar from './Navbar.js';
import VantaWaves from "../VantaJS-animated/VantaWaves.js";
import ExecutiveTeam from "./ExecutiveTeam.js";
import WorkInProgress from "./WorkInProgress.js";

const About = (props) => {
  let underConstruction = process.env.REACT_APP_UNDER_CONSTRUCTION_ABOUT;
  if(underConstruction === "True" || underConstruction === undefined)  {
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
          <VantaWaves
            shininess={20}
            waveHeight={30}
            waveSpeed={0.6}
            color={0x052a3c}
            styles={`fixed h-[100vh]`}
          />
        </div>
        <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between">
          <div></div>
          <div className="w-[95%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[90%] ml-[50%] translate-x-[-50%] py-8 ">
            <h1 className=" text-center items-center font-bold text-white sm:text-4xl md:text-5xl xl:text-6xl text-3xl">
              Our Mission
            </h1>
            <div className="text-center items-center font-bold text-white py-5">
              <p>
              Our purpose has always been to serve students interested in computing. We work to do this primarily through organizing events that provide value in a multitude of ways. Whether by hosting our annual networking event, a simple games night, or something in between, fostering a strong community is our top priority.
              </p>
              <p className="pt-3">
              Through the years CAMRU has helped many students find work terms, internships, and even full-time jobs through our networking events and sharing information from local companies we work with. We have been the catalyst to innumerable friendships and professional connections that will last a lifetime. As well, we have assisted students with academic, professional, and social support they have needed over the years.       
              </p>
            </div>
            <h2 className=" text-center items-center font-bold text-white sm:text-3xl md:text-4xl xl:text-5xl text-2xl pb-5">
              Our Team
            </h2>
            <ExecutiveTeam />
          </div>
          <div className="w-full bottom-0" >
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}


export default About;