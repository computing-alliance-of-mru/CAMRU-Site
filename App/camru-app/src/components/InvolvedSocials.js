import { map } from "lodash";
import React, { useEffect, useState } from "react";
import Executive from "./Executive.js";
import Socials from "./Socials.js";


const InvolvedSocials = (props) => {

  // get request to get all the executive team members
  
  return (
    <div className="h-[150px] rounded">
      <div className="bg-[#f0f0f0] w-full p-4 rounded shadow-md">
        <Socials />
      </div>
    </div>

  );
}

export default InvolvedSocials;