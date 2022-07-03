import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

 return (
     <nav class="flex items-center justify-between flex-wrap bg-[#0f7ca7] p-6">
        <div lass="w-full block flex-grow lg:flex lg:items-center w-auto">
        <ul class="text-sm lg:flex-grow">
            <li class="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-white mr-4">
                <Link to="/">Home</Link>
            </li>
            <li class="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-white mr-4">
                <Link to="/Contact">Contact</Link>
            </li>
            <li class="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-white mr-4">
                <Link to="/About">About</Link>
            </li>
            <li class="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-white mr-4">
                <Link to="/SignUp">SignUp</Link>
            </li>
        </ul>
        </div>
    </nav>
 );
}

export default Navbar;