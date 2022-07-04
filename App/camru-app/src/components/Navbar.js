import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/camru-ff-trimed.png';

const Navbar = (props) => {

 return (
     <nav class="realtive top-0 z-10 w-full flex items-center justify-between flex-wrap bg-[#0f7ca7] h-[200px] lg:h-[50px] px-4">
        <div lass="w-full block flex-grow lg:flex lg:items-center w-auto">
        <ul class="text-sm lg:flex-grow">
            <li class="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-[rgb(2,48,72)] mr-4">
                <Link to="/">About Us</Link>
            </li>
            <li class="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-[rgb(2,48,72)] mr-4">
                <Link to="/Events">Events</Link>
            </li>
            <li class="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-[rgb(2,48,72)] mr-4">
                <Link to="/Contact">Contact</Link>
            </li>
            <li class="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-[rgb(2,48,72)] mr-4">
                <Link to="/SignUp">Sign Up</Link>
            </li>
        </ul>
        </div>
        <div class="flex">
            <p class="text-white pr-4 font-bold">CAMRU</p>
            <img class="h-6 w-auto" src={logo} alt="camru logo" />
        </div>
    </nav>
 );
}

export default Navbar;