import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/camru-ff-trimed.png';
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = (props) => {
    const [isOpen, setOpen] = useState(false);

    const location = useLocation();

    const [isHome, setHome] = useState(false);
    const [isContact, setContact] = useState(false);
    const [isAbout, setAbout] = useState(false);
    const [isSignUp, setSignUp] = useState(false);
    const [isControlPanel, setIsControlPanel] = useState(false);
    const [isEvents, setEvents] = useState(false);
    

    function getListOfLinks() {
        if (isOpen) {
            return "absolute bg-[#0f7ca7] w-full left-0 top-[45px] h-[calc(100vh-45px)] z-50";
        } else {
            return "hidden sm:block";
        }
    }

    useEffect(() => {
        // console.log(location.pathname + ' :: ' + props.isLoggedIn);
        location.pathname === "/" ? setHome(true) : setHome(false);
        location.pathname === "/Contact" ? setContact(true) : setContact(false);
        location.pathname === "/About" ? setAbout(true) : setAbout(false);
        location.pathname === "/SignUp" ? setSignUp(true) : setSignUp(false);
        location.pathname === "/Events" ? setEvents(true) : setEvents(false);
        location.pathname === "/ControlPanel" ? setIsControlPanel(true) : setIsControlPanel(false);
        function handleResize() {
            setOpen(false);
        }
        window.addEventListener('resize', handleResize)
    }, [location]);



    return (
        <nav className="realtive top-0 z-10 w-full bg-[#0f7ca7] h-[50px] px-4 flex justify-between align-middle">
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
                    <Link to="/About">
                        <li className={"block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " + (isAbout ? "underline font-semibold" : "")} >
                            About Us
                        </li>
                    </Link>
                    <Link to="/Get_Involved">
                        <li className={"block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " + (isEvents ? "underline font-semibold" : "")}>
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
                    {props.isLoggedIn ? (
                    <Link to="/ControlPanel">
                        <li className={"block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " + (isControlPanel ? "underline font-semibold" : "")}>
                            ControlPanel
                        </li>
                    </Link>) : null}
                </ul>
            </div>
            <div className="h-[50px] p-3 flex">
                    {props.isLoggedIn ? (
                    <Link to="/logout">
                        <li className={"block sm:inline-block hover:text-white text-[rgb(2,48,72)] mr-4 " }>
                            Logout
                        </li>
                    </Link>) : ""}
                <p className="pr-4 font-bold text-white">CAMRU</p>
                <img className="w-auto h-6" src={logo} alt="camru logo" />
            </div>
        </nav>
    );
}

export default Navbar;