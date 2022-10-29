import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";


//https://cdn.discordapp.com/icons/492045394327371776/97362c76447afec4760968721a3856c0.webp
// https://cdn.discordapp.com/icons/882703652429631509/a74a73aa22480b3eecaf57849c511235.webp

//https://discord.com/api/guilds/492045394327371776/widget.json 
//https://discord.com/api/guilds/492045394327371776






const Discord = (prop) => {

  const [discordData, setDiscordData] = useState(null);
  const [online, setOnline] = useState();
  const [members, setMembers] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/api/discord/count`)
    .then(response => response.json())
    .then(data => {
      setDiscordData(data);
      setOnline(data.approximate_presence_count);
      setMembers(data.approximate_member_count);
    });

  }, []);
  
  return (
    
    <div className="w-[300px] rounded">  
      <div className="bg-[#f0f0f0] w-full p-4 rounded shadow-md h-[150px]">
        <div className="w-full h-[50px] flex items-center justify-around">
          <img src="https://cdn.discordapp.com/icons/882703652429631509/a74a73aa22480b3eecaf57849c511235.webp" alt="discord" className="w-[50px] h-[50px] rounded-full" />
          <h1 className="text-xl font-semibold text-black">MRU Student Hub</h1>
        </div>
        <div className="w-full h-[50px] flex justify-center items-center pt-4">
          <a className="hover:bg-[#7289DA] bg-[#5865f2] w-full h-[30px] rounded-full text-white font-bold flex items-center justify-center" href="https://discord.gg/2pgfJAcgTT" target="_blank"><svg 
            className="w-6 h-6 pr-1 fill-current"
            role="img" viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
          </svg>
          <span className="pl-1">Join Now</span></a>
        </div>
        <div className="flex items-center justify-center w-full pt-1">
          <span className="pl-1 text-xs text-slate-400">Note: Not Managed By CAMRU</span>
        </div>
      </div>
    </div>
    
  );
};


export default Discord;