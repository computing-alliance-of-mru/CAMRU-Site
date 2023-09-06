import { map } from "lodash";
import React, { useEffect, useState } from "react";
import Executive from "./Executive.js";
import Socials from "./Socials.js";
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';


const InvolvedSocials = (props) => {

  // get request to get all the executive team members
  const [socialColor, setSocialColors] = useState('');


  return (
    <div className="">
      <div className="flex justify-between flex-col h-[100%]">
        <div className="bg-[#f0f0f0] rounded shadow-md group hover:cursor-pointer hover:bg-gray-300">
          <a href="https://www.linkedin.com/groups/13951329/" target="_blank" className="flex justify-between">
            <img src={linkedin} className="w-10 h-10 group-hover:opacity-70 transition duration-150 ease-out hover:ease-in m-1" />
            <p className="mr-5 my-auto group-hover:text-black text-gray-500 font-semibold transition duration-150 ease-out hover:ease-in">linkedin</p>
          </a>
        </div>
        <div className="bg-[#f0f0f0] rounded shadow-md group hover:cursor-pointer hover:bg-gray-300">
          <a href="https://www.facebook.com/groups/231247982172687" target="_blank" className="flex justify-between">
            <img src={facebook} className="w-10 h-10 group-hover:opacity-70 transition duration-150 ease-out hover:ease-in m-1" />
            <p className="mr-5 my-auto group-hover:text-black text-gray-500 font-semibold transition duration-150 ease-out hover:ease-in">facebook</p>
          </a>
        </div>
        <div className="bg-[#f0f0f0] rounded shadow-md group hover:cursor-pointer hover:bg-gray-300">
          <a href="https://twitter.com/MRU_CAMRU" target="_blank" className="flex justify-between">
            <img src={twitter} className="w-10 h-10 group-hover:opacity-70 transition duration-150 ease-out hover:ease-in m-1" />
            <p className="mr-5 my-auto group-hover:text-black text-gray-500 font-semibold transition duration-150 ease-out hover:ease-in">twitter</p>
          </a>
        </div>
        <div className="bg-[#f0f0f0] rounded shadow-md group hover:cursor-pointer hover:bg-gray-300">
          <a href="https://www.instagram.com/mru_camru/" target="_blank" className="flex justify-between">
            <img src={instagram} className="w-10 h-10 group-hover:opacity-70 transition duration-150 ease-out hover:ease-in m-1" />
            <p className="mr-5 my-auto group-hover:text-black text-gray-500 font-semibold transition duration-150 ease-out hover:ease-in">instagram</p>
          </a>
        </div>
      </div>
    </div>

  );
}

export default InvolvedSocials;