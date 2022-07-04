//creat component 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import Navbar from './Navbar.js';

const Home = (props) => {

 return (
    <div className="bg-gray-200">
        <Navbar />
        <p>Home</p>
        <Footer />
    </div>
 );
}


export default Home;