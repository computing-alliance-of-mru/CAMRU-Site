//creat component
import React, { useEffect, useState } from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar";
import Float from "../animated-components/Float";
import Events from "./Events.jsx";
import ExecutiveTeam from "./ExecutiveTeam.jsx";
import VantaWaves from "../VantaJS-animated/VantaWaves.jsx";
import { Link } from "react-router-dom";
import sponsor from "../assets/LaunchPad.png";

const Home = (props) => {
	return (
		<div className="w-full h-[100vh]">
			<Navbar />
			<div className="absolute top-0 w-full -z-10"></div>
			<div className="relative flex flex-col justify-start w-full align-middle min-h-[calc(100vh-50px)]">
				<div className="w-full z-10 h-[300px] flex flex-col justify-between">
					<Float style={"h-[300px] absolute"} />
					<div></div>
					<div className="px-3 max-w-[1060px] mx-auto w-full">
						<h1 className="items-center text-4xl font-bold text-center text-white sm:text-5xl md:text-6xl xl:text-7xl drop-shadow-xl shadow-white">
							Computing Alliance of Mount Royal University
						</h1>
						<div className="items-center mx-3 mt-8 font-bold text-center text-white">
							A place for computing students to socialize,
							network, and learn.
						</div>
					</div>
					<div className="w-full px-3 py-5 font-semibold text-center text-white underline drop-shadow-xl shadow-white animate-pulse">
						<Link to="/GetInvolved">
							<a href="https://bit.ly/CAMRUNetworking">
								Get Involved
							</a>
						</Link>
					</div>
				</div>
				<div className="relative flex flex-col justify-center align-middle">
					<h1 className="items-center pt-6 text-3xl font-bold text-center text-black sm:text-4xl md:text-5xl">
						Our Mission
					</h1>
					<div className="relative text-gray-900 flex flex-col font-medium px-5">
						<p className="pt-3  m-auto max-w-[1060px] text-justify">
							Our purpose has always been to serve students
							interested in computing. We work to do this
							primarily through organizing events that provide
							value in a multitude of ways. Whether by hosting our
							annual networking event, a simple games night, or
							something in between, fostering a strong community
							is our top priority.
						</p>
						<p className="pt-3   m-auto max-w-[1060px] text-justify">
							Through the years CAMRU has helped many students
							find work terms, internships, and even full-time
							jobs through our networking events and sharing
							information from local companies we work with. We
							have been the catalyst to innumerable friendships
							and professional connections that will last a
							lifetime. As well, we have assisted students with
							academic, professional, and social support they have
							needed over the years.
						</p>
					</div>
				</div>

				<div className="w-full">
					<div className="relative left-[50%] w-48 translate-x-[-50%]">
						<div className="items-center w-48 mt-3 text-center">
							<div className="h-10 shadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-center w-48 cursor-pointer">
								<a
									href="https://drive.google.com/file/d/1s2G7i_JTaSStJiPu1w4vM6dCBpsx9K_m/view?usp=sharing"
									target="_blank"
								>
									Become A Sponsor
								</a>
							</div>
							<p className="pt-1 text-xs">Contact Us</p>
						</div>
					</div>
				</div>

				<div className="w-[95%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[90%] ml-[50%] translate-x-[-50%] py-8 max-w-[1060px]">
					<h2 className="items-center pb-5 text-2xl font-bold text-center text-black sm:text-3xl md:text-4xl xl:text-5xl">
						Our Team
					</h2>
					<ExecutiveTeam execData={props.execData} />
				</div>

				<div className="flex-grow"></div>
				<div className="bottom-0 w-full">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Home;
