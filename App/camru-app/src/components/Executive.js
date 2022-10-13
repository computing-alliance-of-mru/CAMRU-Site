import React, { useEffect, useState } from "react";


const Executive = (props) => {
  // https://www.npmjs.com/package/react-preload-image
  

  return (
    <div className="p-4 rounded-lg shadow-lg bg-camru-blue">
        <div className="flex flex-col items-center">
        <img src={props.photoPath} width="600" height="900" alt="Image"/>
        <div className="flex flex-col justify-center w-full mt-2 text-center align-middle">
            <h3 className="mb-1 text-lg font-medium text-white title-font">{props.name}</h3>
            <div className="h-1 mt-2 mb-4 rounded w-[600] relative bg-camru-blue4"></div>
            <p className="text-white">{props.position}</p>
        </div>
        </div>
    </div>

  );
}


export default Executive;

