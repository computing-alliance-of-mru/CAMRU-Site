import React, { useEffect, useState, } from "react";
import ContactForm from './components/ContactForm.js';
import Home from './components/Home.js';
import HomeV2 from './components/HomeV2.js';
import SignUp from './components/SignUp.js';
import Expired from './components/Expired.js';
import About from './components/About.js';
import NoMatch from './components/NoMatch.js';

import { Route, Routes, useLocation } from "react-router-dom";
import WorkInProgress from "./components/WorkInProgress.js";


import GetInvolved from "./components/GetInvolved.js";
import PrivacyPolicy from "./legal/PrivacyPolicy.js";
import TermsOfUse from "./legal/TermsOfUse.js";



//animated backgrounds
//https://animatedbackgrounds.me/
//https://www.vantajs.com/
//login in with mru 
//https://www.passportjs.org/tutorials/google/

function App() {


  const [execData, setExecData] = useState([]);

  async function getExecData() {
    if (localStorage.getItem("execData") === null) {
      fetch(`${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/database/execs`)
      .then(response => response.json())
      .then(data => {
        setExecData(data)
        localStorage.setItem("execData", JSON.stringify(data));
      })
      .catch(err => console.log(err));
    } else {
      setExecData(JSON.parse(localStorage.getItem("execData")));
      //check if local storage is the same as the database
      fetch(`${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/database/execs`)
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
  }, []);




    return (
        <Routes>
          <Route path="/" element={<HomeV2 execData={execData}/>} />
          <Route path="/Contact" element={<ContactForm/>} />
          <Route path="/About" element={<About execData={execData}/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/GetInvolved" element={<GetInvolved />} />      
          <Route path="/Expired" element={<Expired/>} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/terms" element={<TermsOfUse />}/>
          <Route path="/privacy" element={<PrivacyPolicy />}/>
        </Routes>
    );
  }


export default App;
