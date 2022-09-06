import React, { useState } from "react";
import ContactForm from './components/ContactForm.js';
import Home from './components/Home.js';
import SignUp from './components/SignUp.js';
import Events from './components/Events.js';
import About from './components/About.js';
import { Route, Routes, useLocation } from "react-router-dom";
import WorkInProgress from "./components/WorkInProgress.js";
import Admin from "./components/Admin.js";
import ControlPanel from "./components/ControlPanel.js";

//animated backgrounds
//https://animatedbackgrounds.me/
//https://www.vantajs.com/
//login in with mru 
//https://www.passportjs.org/tutorials/google/

function App() {



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<ContactForm />} />
      <Route path="/About" element={<About />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Events" element={<WorkInProgress />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/ControlPanel" element={<ControlPanel  /> } />
    </Routes>
  );
}

export default App;
