//creat component 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import Navbar from './Navbar.js';
import Waves from "../animated-components/Wave.js";
import {  Navigate } from "react-router-dom";

const ControlPanel = (props) => {

  // const [authenticated, setAuthenticated] = useState(null);

 
  if (!props.isLoggedIn) {
    return <Navigate to="/" />
 }
    return (
      console.log(props.isLoggedIn),
      <div className="w-full h-[100vh]">
        <Navbar isLoggedIn={props.isLoggedIn}/>
        <div className="absolute top-0 w-full -z-10">
          <Waves />
        </div>
        <div className="w-full flex flex-col relative  h-[calc(100vh-50px)] justify-between">
          <div className="w-[95%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[90%] ml-[50%] translate-x-[-50%] py-8 ">
            <h1 className=" text-center items-center font-bold text-white translate-y-[100%] sm:text-5xl md:text-6xl xl:text-7xl text-4xl">
              Computing Alliance of Mount Royal University {console.log(props)}
            </h1>
            <div className="text-center items-center font-bold text-white md:translate-y-[800%] sm:translate-y-[600%] translate-y-[400%]">
              A place for computing students to socialize, network, and learn.
            </div>
          </div>
          <div className="w-full bottom-0" >
            <Footer />
          </div>
        </div>
      </div>
    );
  }


export default ControlPanel;