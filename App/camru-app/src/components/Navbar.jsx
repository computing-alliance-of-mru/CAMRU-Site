import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/camru-ff-trimed.png';
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = (props) => {
    const [isOpen, setOpen] = useState(false);

    const location = useLocation();

    const [isHome, setHome] = useState(false);
    const [isContact, setContact] = useState(false);
    const [isSignUp, setSignUp] = useState(false);
    const [isGetInvolved, setGetInvolved] = useState(false);
    

    function getListOfLinks() {
        if (isOpen) {
            return "absolute bg-[#0f7ca7] w-full left-0 top-[45px] h-[calc(100vh-45px)] z-50";
        } else {
            return "hidden sm:block";
        }
    }

    useEffect(() => {
        location.pathname === "/" ? setHome(true) : setHome(false);
        location.pathname === "/Contact" ? setContact(true) : setContact(false);
        location.pathname === "/SignUp" ? setSignUp(true) : setSignUp(false);
        location.pathname === "/GetInvolved" ? setGetInvolved(true) : setGetInvolved(false);
        function closeHamburger() {
            setOpen(false);
        }
        window.addEventListener('resize', closeHamburger)
        window.addEventListener('scroll', closeHamburger)
        
    }, [location]);



    return (
        <nav className="realtive top-0 z-10 w-full bg-[#0f7ca7] h-[50px] px-4 ">
            <div className="max-w-[1060px] mx-auto w-full flex justify-between align-middle">
                <div className="block sm:hidden">
                    <Hamburger color="#FFFFFF" rounded toggled={isOpen} toggle={setOpen} />
                </div>
                <div className={"z-10 h-[50px] " + getListOfLinks()}>
                    <ul className="h-[50px] p-3">
                        <Link to="/">
                            <li className={"block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " + (isHome ? "underline font-semibold" : "")}>
                                Home
                            </li>
                        </Link>
                        <Link to="/GetInvolved">
                            <li className={"block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " + (isGetInvolved ? "underline font-semibold" : "")}>
                                Get Involved
                            </li>
                        </Link>
                        <Link to="/Contact">
                            <li className={"block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " + (isContact ? "underline font-semibold" : "")}>
                                Contact
                            </li>
                        </Link>
                        <Link to="/SignUp">
                            <li className={"block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " + (isSignUp ? "underline font-semibold" : "")}>
                                Sign Up
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="h-[50px] p-3 flex">
                    <p className="pr-4 font-bold text-white">CAMRU</p>
                    <img className="w-auto h-6" src={logo} alt="camru logo" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;