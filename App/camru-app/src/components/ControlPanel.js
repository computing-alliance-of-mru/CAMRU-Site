//creat component 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import Navbar from './Navbar.js';
import Float from "../animated-components/Float.js";
import { Navigate } from "react-router-dom";
import axios from "axios";


import ExecutiveTeamBubbles from "./ExecutiveTeamBubbles.js";
const ControlPanel = (props) => {

  // const [authenticated, setAuthenticated] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const position = document.getElementById("position");
    const file = document.getElementById("image");
    const formData = new FormData();
    const config = { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true };
    formData.append("name", name.value);
    formData.append("position", position.value);
    formData.append("file", file.files[0]);



    axios.post(`${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/addexec`, formData, config)
      .then((response) => {
        console.log(response);
        alert("Successfully added executive");
        window.location.reload();
      }).catch((error) => {
        console.log(error);
      });

  };




  if (!props.isLoggedIn) {
    console.log("not logged in");
    // return <Navigate to="/" />
  }
  return (
    console.log(props.isLoggedIn),
    <div className="w-full h-[100vh]">
      <Navbar isLoggedIn={props.isLoggedIn} />
      <div className="absolute top-0 w-full -z-10">
        <Float />
      </div>
      <div className="w-full flex flex-col relative  h-[calc(100vh-50px)] justify-between">
        <div className="w-[95%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[90%] ml-[50%] translate-x-[-50%] py-8 ">

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="">
              <form onSubmit={handleSubmit} id="signup-form" className="px-6 py-6 flex flex-col">
                <div className="mb-4">
                  <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="name">Name:</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-[#023048] focus:outline-[#00b1ff]" type="text" id="name" required />
                </div>
                <div className="mb-4">
                  <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="position">Position:</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-[#023048] focus:outline-[#00b1ff]" type="text" id="position" required />
                </div>
                <div className="mb-4">
                  <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="image">Image:</label>
                  <input type="file" id="image" multiple className="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-[#00b1ff] bg-[#023048]" />

                </div>
                <div className="mt-2 col-span-2 mx-auto">
                  <button className="mt-2 sshadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:outline-[#00b1ff] text-white font-bold rounded w-32 text-xl py-3" type="submit" >Add Exec</button>
                </div>
              </form>



              <div className="text-center text-white pb-5">Current Team</div>
              <ExecutiveTeamBubbles />
            </div>
            <div className="">Events</div>

          </div>
        </div>
        <div className="w-full bottom-0" >
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default ControlPanel;