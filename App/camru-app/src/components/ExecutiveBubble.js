import React, { useEffect, useState } from "react";
import Axios from "axios";


const ExecutiveBubble = (props) => {

  function removeExec(e) {
    console.log("remove " + props.name);
    console.log("remove " + props.photoPath);

    // post request to remove the executive team member

    Axios({
      method: "post",
      url: `${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/removeexec`,
      data: {
        name: props.name,
        photoPath: props.photoPath,
        position: props.position
      },
      withCredentials: true
    }).then((res) => {
      console.log(res);
      alert("Successfully removed executive");
      window.location.reload();
    }).catch((err) => {
      console.log(err);
    })

  }
  

  return (
    <div className="">
        <div className="flex flex-col items-center relative">
        <button onClick={removeExec} type="button" class="bg-red-600 rounded-md p-0 inline-flex absolute top-0 right-4 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        <img src={props.photoPath} width="600" height="900" alt="Image" data-lazy-src={props.photoPath}  data-ll-status="loaded" loading="lazy" className=" w-24 rounded mx-auto" />
        <div className="text-center mt-2">
            <h3 className=" text-white">{props.name}</h3>
            <div className="w-32 h-1 bg-camru-blue4 rounded mt-2 mb-4"></div>
            <p className="text-white">{props.position}</p>
        </div>
        </div>
    </div>

  );
}


export default ExecutiveBubble;

