//creat component 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VantaNet from "../VantaJS-animated/VantaNet.js";
import Footer from "./Footer.js";
import Navbar from './Navbar.js';
import SlidingDiagonals from '../animated-components/SlidingDiagonals.js';
import VantaWaves from "../VantaJS-animated/VantaWaves.js";

const Home = (props) => {

 return (
    <div className="bg-gray-200">
        <Navbar />
        <VantaWaves 
        shininess={20}
        waveHeight={30}
        waveSpeed={0.6}
        color={0x052a3c}
        styles={"h-[500px]"}
        />
        <Footer />
    </div>
 );
}


export default Home;