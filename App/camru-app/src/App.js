import React, { useState } from "react";
import './App.css';
import ContactForm from './components/ContactForm.js';
require('dotenv').config();


function App() {
  
  

  return (
    <div className="App">
      <ContactForm /> 
      {/* <ReCAPTCHA
        sitekey={process.env.REACT_APP_CAPTCHA_TEST_SITE_KEY}
        size="invisible"
        onChange={onChange}
        theme='dark'
      /> */
      }
    </div>
  );
}

export default App;
