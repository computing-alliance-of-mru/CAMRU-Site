import React, { useState } from "react";
import ContactForm from './components/ContactForm.js';
import Home from './components/Home.js';
import Waves from './animated-components/Wave.js';
import SignUp from './components/SignUp.js';
import Events from './components/Events.js';
import { Route, Routes, useLocation } from "react-router-dom";
import VantaWaves from "./VantaJS-animated/VantaWaves.js";
import WorkInProgress from "./components/WorkInProgress.js";

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
      <Route path="/About" element={<Waves />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Events" element={<WorkInProgress />} />
    </Routes>
  );
}

export default App;
