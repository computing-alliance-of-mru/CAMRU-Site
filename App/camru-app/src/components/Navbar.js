import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/camru-ff-trimed.png';
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = (props) => {
    const [isOpen, setOpen] = useState(false);

    function getListOfLinks() {
        if(isOpen){
            return "absolute bg-[#0f7ca7] w-full left-0 top-[45px] h-[calc(100vh-45px)] z-50";
        }else{
            return "hidden";
        }
    }

    function makeFixed() {
        if(isOpen){
            return "fixed";
        }else{
            return "";
        }
    }


 return (
     <nav className={"realtive top-0 z-10 w-full sm:flex items-center justify-between flex-wrap bg-[#0f7ca7] h-[50px] px-4 " + makeFixed()}>
        <div className="sm:hidden block">
            <Hamburger color="#FFFFFF" rounded toggled={isOpen} toggle={setOpen}/>
        </div>
        <div className={"sm:bg-none sm:flex-grow sm:flex sm:items-center sm:w-auto sm:static " + getListOfLinks()}>
            <ul className="sm:block text-sm sm:flex-grow pl-6">
                <Link to="/">
                    <li className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mr-4 font-semibold underline">
                        About Us
                    </li>
                </Link>
                <Link to="/Events">
                    <li className="block mt-4 sm:inline-block sm:mt-0 text-white font-semibold hover:text-[rgb(2,48,72)] mr-4">
                        Events
                    </li>
                </Link>
                <Link to="/Contact">
                    <li className="block mt-4 sm:inline-block sm:mt-0 text-white font-semibold hover:text-[rgb(2,48,72)] mr-4">
                        Contact
                    </li>
                </Link>
                <Link to="/SignUp">
                    <li className="block mt-4 sm:inline-block sm:mt-0 text-white font-semibold hover:text-[rgb(2,48,72)] mr-4">
                        Sign Up
                    </li>
                </Link>
            </ul>
        </div>
        <div className="sm:flex absolute flex left-0 top-[12px] w-[80px] ml-[calc(100%-132px)]">
            <p className="text-white pr-4 font-bold">CAMRU</p>
            <img className="h-6 w-auto" src={logo} alt="camru logo" />
        </div>
    </nav>
 );
}

export default Navbar;