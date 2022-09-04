import React, { useEffect, useState } from "react";
import Socials from "./Socials";

const Footer = (prop) => {
    return (
        <footer className="bg-black h-[80px] sm:h-[50px] flex align-middle justify-center md:justify-end flex-wrap">
          <div className="mr-3 ml-5 h-[50px] hidden sm:block">
            <p className="text-white text-sm mt-[20px] sm:mt-[25px] translate-y-[-50%]" >Join Our Socials:</p>
          </div>
          <Socials />
        </footer>
        )
    }

    export default Footer