//creat component 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VantaNet from "../VantaJS-animated/VantaNet.js";
import Footer from "./Footer.js";
import Navbar from './Navbar.js';
import SlidingDiagonals from '../animated-components/SlidingDiagonals.js';
import VantaWaves from "../VantaJS-animated/VantaWaves.js";
import Waves from "../animated-components/Wave.js";
import Taylor from "../assets/Taylor.jpg";
import Dylan from "../assets/Dylan.jpeg";

const About = (props) => {

  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="absolute top-0 w-full -z-10">
        <VantaWaves
          shininess={20}
          waveHeight={30}
          waveSpeed={0.6}
          color={0x052a3c}
          styles={` h-[calc(240vh)] sm:h-[calc(150vh)]   lg:h-[calc(115vh)] xl:h-[calc(110vh)] `}
        />
      </div>
      <div className="w-full flex flex-col relative xl:h-[calc(110vh)] lg:h-[calc(115vh)] sm:h-[calc(150vh)] h-[calc(240vh)] justify-between">
        <div className="w-[95%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[90%] ml-[50%] translate-x-[-50%] py-8 ">
          <h1 className=" text-center items-center font-bold text-white translate-y-[100%] sm:text-4xl md:text-5xl xl:text-6xl text-3xl">
            Our Mission
          </h1>
          <div className="text-center items-center font-bold text-white xl:translate-y-[120%] lg:translate-y-[25%] md:translate-y-[25%] sm:translate-y-[20%] translate-y-[15%]">
          <p>
          Our purpose has always been to serve students interested in computing. We work to do this primarily through organizing events that provide value in a multitude of ways. Whether by hosting our annual networking event, a simple games night, or something in between, fostering a strong community is our top priority.
          </p>
          <p className="xl:translate-y-[15%] lg:translate-y-[15%] md:translate-y-[10%] sm:translate-y-[10%] translate-y-[5%]">
          Through the years CAMRU has helped many students find work terms, internships, and even full-time jobs through our networking events and sharing information from local companies we work with. We have been the catalyst to innumerable friendships and professional connections that will last a lifetime. As well, we have assisted students with academic, professional, and social support they have needed over the years.       
          </p>
        </div>
          <h2 className=" text-center items-center font-bold text-white xl:translate-y-[350%] translate-y-[250%] sm:text-3xl md:text-4xl xl:text-5xl text-2xl ">
            Our Team
          </h2>
          <div className="grid xl:translate-y-[60%] lg:translate-y-[25%] translate-y-[10%]">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              <div className="bg-camru-blue rounded-lg shadow-lg p-4">
                <div className="flex flex-col items-center">
                  <img src="https://static.wikia.nocookie.net/stitchipediaalilostitch/images/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/" width="600" height="900" alt="Image" data-lazy-src="https://static.wikia.nocookie.net/stitchipediaalilostitch/images/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/" data-ll-status="loaded" class="entered lazyloaded" />
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-medium title-font mb-1 text-white">David Olah</h3>
                    <div className="w-36 lg:w-44 h-1 bg-camru-blue4 rounded mt-2 mb-4"></div>
                    <p className="text-white">President</p>
                  </div>
                </div>
              </div>
              <div className="bg-camru-blue rounded-lg shadow-lg p-4">
                <div className="flex flex-col items-center">
                  <img src={Taylor} width="600" height="900" alt="Image" data-lazy-src={Taylor} data-ll-status="loaded" class="entered lazyloaded" />
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-medium title-font mb-1 text-white">Taylor Amy</h3>
                    <div className="w-36 lg:w-44 h-1 bg-camru-blue4 rounded mt-2 mb-4"></div>
                    <p className="text-white">Vice President</p>
                  </div>
                </div>
              </div>
              <div className="bg-camru-blue rounded-lg shadow-lg p-4">
                <div className="flex flex-col items-center">
                  <img src={Dylan} width="600" height="900" alt="Image" data-lazy-src={Dylan} data-ll-status="loaded" class="entered lazyloaded" />
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-medium title-font mb-1 text-white">Dylan Borchert</h3>
                    <div className="w-36 lg:w-44 h-1 bg-camru-blue4 rounded mt-2 mb-4"></div>
                    <p className="text-white">VP Finance</p>
                  </div>
                </div>
              </div>
              <div className="bg-camru-blue rounded-lg shadow-lg p-4">
                <div className="flex flex-col items-center">
                <img src="https://static.wikia.nocookie.net/stitchipediaalilostitch/images/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/" width="600" height="900" alt="Image" data-lazy-src="https://static.wikia.nocookie.net/stitchipediaalilostitch/images/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/" data-ll-status="loaded" class="entered lazyloaded" />
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-medium title-font mb-1 text-white">Colin Cui</h3>
                    <div className="w-36 lg:w-44 h-1 bg-camru-blue4 rounded mt-2 mb-4"></div>
                    <p className="text-white">VP External</p>
                  </div>
                </div>
              </div>
              <div className="bg-camru-blue rounded-lg shadow-lg p-4">
                <div className="flex flex-col items-center">
                <img src="https://static.wikia.nocookie.net/stitchipediaalilostitch/images/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/" width="600" height="900" alt="Image" data-lazy-src="https://static.wikia.nocookie.net/stitchipediaalilostitch/images/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/" data-ll-status="loaded" class="entered lazyloaded" />
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-medium title-font mb-1 text-white">Izabelle Guevarra</h3>
                    <div className="w-36 lg:w-44 h-1 bg-camru-blue4 rounded mt-2 mb-4"></div>
                    <p className="text-white">VP Internal</p>
                  </div>
                </div>
              </div>
              <div className="bg-camru-blue rounded-lg shadow-lg p-4">
                <div className="flex flex-col items-center">
                <img src="https://static.wikia.nocookie.net/stitchipediaalilostitch/images/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/" width="600" height="900" alt="Image" data-lazy-src="https://static.wikia.nocookie.net/stitchipediaalilostitch/images/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/" data-ll-status="loaded" class="entered lazyloaded" />
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-medium title-font mb-1 text-white">Ashley Hunchak</h3>
                    <div className="w-36 lg:w-44 h-1 bg-camru-blue4 rounded mt-2 mb-4"></div>
                    <p className="text-white">VP Student Engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bottom-0" >
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default About;