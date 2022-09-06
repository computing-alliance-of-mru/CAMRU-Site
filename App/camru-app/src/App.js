import React, { useEffect, useState } from "react";
import ContactForm from './components/ContactForm.js';
import Home from './components/Home.js';
import SignUp from './components/SignUp.js';
import Events from './components/Events.js';
import About from './components/About.js';
import { Route, Routes, useLocation } from "react-router-dom";
import WorkInProgress from "./components/WorkInProgress.js";
import Admin from "./components/Admin.js";
import ControlPanel from "./components/ControlPanel.js";
import Axios from "axios";
import Logout from "./components/Logout.js";

//animated backgrounds
//https://animatedbackgrounds.me/
//https://www.vantajs.com/
//login in with mru 
//https://www.passportjs.org/tutorials/google/

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  function checkLoggedIn() {
    console.log("isLoggedin: " + isLoggedIn);
    if (isLoggedIn === null) {
      console.log("get")
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:5000/user",
      }).then((res) => {
        if (res.data === "Not Authenticated") {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      });
    }
    console.log("isLoggedin: " + isLoggedIn);

  }

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home
        isLoggedIn={isLoggedIn}
      />
      } />
      <Route path="/Contact" element={
        <ContactForm
          isLoggedIn={isLoggedIn}
        />
      } />
      <Route path="/About" element={
        <About
          isLoggedIn={isLoggedIn}
        />
      } />
      <Route path="/SignUp" element={
        <SignUp
          isLoggedIn={isLoggedIn}
        />
      } />
      <Route path="/Events" element={
        <WorkInProgress
          isLoggedIn={isLoggedIn}
        />
      } />
      <Route path="/Admin" element={
        <Admin
          isLoggedIn={isLoggedIn}
        />
      } />
      <Route path="/ControlPanel" element={
        <ControlPanel
          isLoggedIn={isLoggedIn}
        />
      } />
      <Route path="/Logout" element={
        <Logout
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      } />
    </Routes>
  );
}

export default App;
