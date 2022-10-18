//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import Reaptcha from 'reaptcha';
import Navbar from './Navbar.js';
import Footer from "./Footer.js";
import Discord from "./Discord.js";
import VantaCells from '../VantaJS-animated/VantaCells.js';
import GeometricGradient from "../animated-components/GeometricGradient.js";
import WorkInProgress from "./WorkInProgress.js";


const GetInvolved = (props) => {

   
  let [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");

  const getName = (e) => {
    let serachParam = searchParams.getAll("id")[0]
    if (serachParam !== undefined) {
      fetch(`${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/name?id=${serachParam}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setName(" " + data.status);
      });
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
        <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between align-middle">
          <div className="p-4 border-b-2 bg-camru-blue border-camru-blue5">
              <h1 className="items-center text-4xl font-bold text-white sm:text-7xl">
              Welcome{name}!
              </h1>
              <h3 className="items-center pt-3 pl-5 text-lg font-bold text-white sm:text-2xl ">
              to the Computing Alliance of Mount Royal University
              </h3>
          </div>

          <div className="relative flex flex-col flex-grow m-4 align-middle">
            <h5 className="items-center pb-6 text-3xl font-bold text-center text-white underline ">
            Get Involved
            </h5>
            <div className="grid gap-3 grid-cols-[300px_1fr] max-w-[1200px]">
              <Discord />
            </div>
          </div>
          <Footer />
          <div></div>
        </div>
        
      </div>
      
    );
  
};


export default GetInvolved;