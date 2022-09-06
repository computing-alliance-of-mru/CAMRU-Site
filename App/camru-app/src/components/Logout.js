//creat component 
import React, { useEffect, useState } from "react";
import {  Navigate } from "react-router-dom";
import Axios from "axios";

const Logout = (props) => {

  useEffect(() => {

    Axios({
      method: "POST",
      data: {
      },
      withCredentials: true,
      url: "http://localhost:5000/logout",
    }).then((res) => {
        console.log(res)
        props.setIsLoggedIn(false);

        });


  }, []);
 

    return (
      <Navigate to="/" />
    );
  }


export default Logout;