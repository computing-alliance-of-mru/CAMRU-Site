//creat component 
import React, { useEffect, useState } from "react";
import Footer from "./Footer.js";
import Navbar from './Navbar.js';
import Float from "../animated-components/Float.js";
import Events from "./Events.js";
import ExecutiveTeam from "./ExecutiveTeam.js";
import VantaWaves from "../VantaJS-animated/VantaWaves.js";
import { Link } from "react-router-dom";

const Home = (props) => {


    return (
        <div className="w-full h-[100vh]">
          <Navbar />
          <div className="absolute top-0 w-full -z-10">
          <VantaWaves
            shininess={20}
            waveHeight={30}
            waveSpeed={0.6}
            color={0xdddddd}
            styles={`fixed h-[100vh]`}
          />
        </div>
          <div className="relative flex flex-col justify-start w-full align-middle min-h-[calc(100vh-50px)]">
            <div className="w-full z-10 h-[300px] flex flex-col justify-between">
            <Float style={"h-[300px] absolute"}/> 
                <div></div>
                <div className="px-3">
                  <h1 className="items-center text-4xl font-bold text-center text-white sm:text-5xl md:text-6xl xl:text-7xl drop-shadow-xl shadow-white">
                    Computing Alliance of Mount Royal University
                  </h1>
                  <div className="items-center mx-3 mt-8 font-bold text-center text-white">
                    A place for computing students to socialize, network, and learn.
                  </div>
                </div>
                <div className="w-full px-3 py-5 font-semibold text-center text-white underline animate-pulse drop-shadow-xl shadow-white">
                  {/* Place to feature Upcoming events */}
                  <Link to="/GetInvolved">
                    Get Involved
                  </Link>
                </div>
            </div>
            {/* <div className="w-full py-3 text-center">
              Event Details Here 
            </div> */}
            <div className="relative flex flex-col justify-center w-full align-middle">
              <h1 className="items-center pt-6 text-3xl font-bold text-center text-black sm:text-4xl md:text-5xl xl:text-6xl">
                Our Mission
              </h1>
              <div className="relative left-[50%] translate-x-[-25%] text-gray-900">
                <p className="pt-3 w-[95%] sm:w-[75%] md:w-[65%] lg:w-[50%]">
                Our purpose has always been to serve students interested in computing. We work to do this primarily through organizing events that provide value in a multitude of ways. Whether by hosting our annual networking event, a simple games night, or something in between, fostering a strong community is our top priority.
                </p>
                <p className="pt-3 w-[95%] sm:w-[75%] md:w-[65%] lg:w-[50%]">
                Through the years CAMRU has helped many students find work terms, internships, and even full-time jobs through our networking events and sharing information from local companies we work with. We have been the catalyst to innumerable friendships and professional connections that will last a lifetime. As well, we have assisted students with academic, professional, and social support they have needed over the years.       
                </p>
              </div>
            </div>
            {/* <div className="w-full text-center">
              <h1 className="items-center pt-6 text-3xl font-bold text-center text-black sm:text-4xl md:text-5xl xl:text-6xl">
                Sponsors
              </h1>
              Sponsors Go Here 
            </div> */}
            <div className="w-full">
              <div className="relative left-[50%] w-48 translate-x-[-50%]"> 
                  <div className="items-center w-48 mt-3 text-center">
                    <div className="h-10 shadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-center w-48 cursor-pointer">
                      <Link to="/Contact">
                      Become A Sponsor
                      </Link>
                    </div>
                    <p className="pt-1 text-xs">Contact Us</p>
                  </div>
              </div>
            </div>

            <div className="w-[95%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[90%] ml-[50%] translate-x-[-50%] py-8 ">
              <h2 className="items-center pb-5 text-2xl font-bold text-center text-black sm:text-3xl md:text-4xl xl:text-5xl">
                Our Team
              </h2>
              <ExecutiveTeam execData={props.execData}/>
            </div>

            <div className="flex-grow"></div>
            <div className="bottom-0 w-full" > 
              <Footer />
            </div> 
          </div>
        </div>
    );
  
}


export default Home;