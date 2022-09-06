import React, { useEffect, useState } from "react";


const Executive = (props) => {

  

  return (
    <div className="bg-camru-blue rounded-lg shadow-lg p-4">
        <div className="flex flex-col items-center">
        <img src={props.photoPath} width="600" height="900" alt="Image" data-lazy-src={props.photoPath}  data-ll-status="loaded" loading="lazy" />
        <div className="text-center mt-2">
            <h3 className="text-lg font-medium title-font mb-1 text-white">{props.name}</h3>
            <div className="w-36 lg:w-44 h-1 bg-camru-blue4 rounded mt-2 mb-4"></div>
            <p className="text-white">{props.position}</p>
        </div>
        </div>
    </div>

  );
}


export default Executive;

