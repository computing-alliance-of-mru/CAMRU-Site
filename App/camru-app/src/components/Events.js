//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Reaptcha from 'reaptcha';
import Navbar from './Navbar.js';
import Waves from '../animated-components/Wave.js';
import Footer from "./Footer.js";


const Events = (props) => {
  
  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="absolute top-0 w-full -z-10">
        <Waves/>
      </div>
      <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between">
        <div></div>
        <diV></diV>
        <div className="w-full bottom-0" > 
          <Footer />
        </div> 
      </div>
      
    </div>
    
  );
};


export default Events;