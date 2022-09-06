import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Reaptcha from 'reaptcha';
import Navbar from './Navbar.js';
import Waves from '../animated-components/Wave.js';
import Footer from "./Footer.js";

//https://cdn.discordapp.com/icons/492045394327371776/97362c76447afec4760968721a3856c0.webp

//https://discord.com/api/guilds/492045394327371776/widget.json 






const Discord = (prop) => {
  
  return (
    <div className="w-full h-[100vh]">
        <iframe src="https://discord.com/widget?id=492045394327371776&name='Computer Science Club'" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
    
  );
};


export default Discord;