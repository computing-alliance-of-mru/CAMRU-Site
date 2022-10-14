//creat component 
import React, { useEffect, useState } from "react";
import Footer from "./Footer.js";
import Navbar from './Navbar.js';
import Float from "../animated-components/Float.js";
import { Link } from "react-router-dom";

const Home = (props) => {


    return (
        <div className="w-full h-[100vh]">
          <Navbar />
          <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-start align-middle">
            <div className="w-full -z-10 h-[300px]">
                <div className="w-full flex flex-col justify-between h-[100%] ">
                  <div></div>
                  <div className="mx-3">
                    <h1 className="items-center text-4xl font-bold text-center text-white sm:text-5xl md:text-6xl xl:text-7xl drop-shadow-xl shadow-white">
                    Computing Alliance of Mount Royal University
                    </h1>
                    <div className="items-center mt-8 font-bold text-center text-white mx-3">
                        A place for computing students to socialize, network, and learn.
                    </div>
                  </div>
                  <div></div>
                </div>
                <Float style={"h-[300px] absolute"}/> 
            </div>
            
            <div className="w-full ">
              <h1 className="text-black text-xl font-semibold p-3 text-center">
                We are Looking For Sponsors
              </h1>
              <div className="px-3 w-full text-center"> 
                  {/* put sponsors here */}
                  <div className="mt-3 text-center w-48 items-center">
                    <div className="h-10 shadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-center w-48 cursor-pointer">
                      <Link to="/Contact">
                      Become A Sponsor
                      </Link>
                    </div>
                    <p className="text-xs pt-1">Contact Us</p>
                  </div>
              </div>

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