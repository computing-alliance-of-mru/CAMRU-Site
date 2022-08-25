//creat component 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VantaNet from "../VantaJS-animated/VantaNet.js";
import Footer from "./Footer.js";
import Navbar from './Navbar.js';
import SlidingDiagonals from '../animated-components/SlidingDiagonals.js';
import Waves from "../animated-components/Wave.js";

const Home = (props) => {

 return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="absolute top-0 w-full -z-10">
        <Waves/>
      </div>
      <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between">
        <div></div>
        <div className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[40%] ml-[50%] translate-x-[-50%] py-8 max-w-[700px]">

        </div>
        <div className="w-full bottom-0" > 
          <Footer />
        </div> 
      </div>
    </div>
 );
}


export default Home;