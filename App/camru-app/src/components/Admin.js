//creat component 
import React, { useEffect, useState } from "react";


import Footer from "./Footer.js";
import Navbar from './Navbar.js';
import Login from "./Login.js";


  
const Admin = (props) => {

  return (
    <div className="w-full h-[100vh]">
      <Navbar isLoggedIn={props.isLoggedIn}/>
      <div className="absolute top-0 w-full -z-10">

      </div>
      <div className="w-full flex flex-col relative xl:h-[calc(95vh)] lg:h-[calc(115vh)] sm:h-[calc(150vh)] h-[calc(240vh)] justify-between">
        <Login />
        <div className="w-full bottom-0" >
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default Admin;