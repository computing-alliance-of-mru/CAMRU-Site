import React, { useState } from "react";
import ContactForm from './components/ContactForm.js';
import Home from './components/Home.js';
import Waves from './animated-background/Wave.js';
import { Route, Routes } from "react-router-dom";

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
      <Route path="/Events" element={<Waves />} />
    </Routes>
  );
}

export default App;
