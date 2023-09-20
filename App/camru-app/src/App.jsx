import React, { useEffect, useState, } from "react";
import ContactForm from './components/ContactForm';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Expired from './components/Expired';
import About from './components/About';
import NoMatch from './components/NoMatch';

import { Route, Routes, useLocation } from "react-router-dom";
import WorkInProgress from "./components/WorkInProgress";


import GetInvolved from "./components/GetInvolved";
import PrivacyPolicy from "./legal/PrivacyPolicy";
import TermsOfUse from "./legal/TermsOfUse";



//animated backgrounds
//https://animatedbackgrounds.me/
//https://www.vantajs.com/
//login in with mru 
//https://www.passportjs.org/tutorials/google/

function App() {


  const [execData, setExecData] = useState([]);

  async function getExecData() {
    if (localStorage.getItem("execData") === null) {
      fetch(`${import.meta.env.VITE_SSL}://${import.meta.env.VITE_SERVER_HOST}/database/execs`)
        .then(response => response.json())
        .then(data => {
          setExecData(data)
          localStorage.setItem("execData", JSON.stringify(data));
        })
        .catch(err => console.log(err));
    } else {
      setExecData(JSON.parse(localStorage.getItem("execData")));
      //check if local storage is the same as the database
      fetch(`${import.meta.env.VITE_SSL}://${import.meta.env.VITE_SERVER_HOST}/database/execs`)
        .then(response => response.json())
        .then(data => {
          if (JSON.stringify(data) !== localStorage.getItem("execData")) {
            localStorage.setItem("execData", JSON.stringify(data));
          }
        })
    }
  }

  useEffect(() => {
    getExecData();
    console.log(import.meta.env.VITE_SERVER_HOST)
  }, []);




  return (
    <Routes>
      <Route path="/" element={<Home execData={execData} />} />
      <Route path="/Contact" element={<ContactForm />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/GetInvolved" element={<GetInvolved />} />
      <Route path="/Expired" element={<Expired />} />
      <Route path="*" element={<NoMatch />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}


export default App;
