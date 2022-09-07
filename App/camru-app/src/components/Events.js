import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";


//https://cdn.discordapp.com/icons/492045394327371776/97362c76447afec4760968721a3856c0.webp
// https://cdn.discordapp.com/icons/882703652429631509/a74a73aa22480b3eecaf57849c511235.webp

//https://discord.com/api/guilds/492045394327371776/widget.json 
//https://discord.com/api/guilds/492045394327371776






const Events = (prop) => {

  const [evenData, setDiscordData] = useState(
    {
        id: "0123456789",
        name: "Networking Event",
        description: "Come join us for a networking event",
        time: "January 2022",
        location: "Mount Royal University",
        link: "https://www.google.com",
        detailedDescription: "Come join us for a networking event",
    },
    {
        id: "9876543210",
        name: "Alumni Panel",
        description: "Come join us for the Alumni Panel",
        time: "September 21, 2022",
        location: "Mount Royal University",
        link: "https://www.google.com",
        detailedDescription: "Come join us for the Alumni Panel",
    }
  
  );


  
  return (
    
    <div className="w-full rounded h-[500px] col-span-2">
      
      <div className="bg-[#f0f0f0] w-full rounded shadow-md h-[100%]">
        <div className="bg-[#007caf] h-[50px] rounded-t">

        </div>
        <div className="h-[100px]">

        </div>
      </div>  
      
    </div>
    

    
  );
};


export default Events;