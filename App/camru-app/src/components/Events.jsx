import { Link } from "react-router-dom";
import useEventbrite from 'react-eventbrite-popup-checkout';

import React, { useEffect, useState } from "react";


//https://cdn.discordapp.com/icons/492045394327371776/97362c76447afec4760968721a3856c0.webp
// https://cdn.discordapp.com/icons/882703652429631509/a74a73aa22480b3eecaf57849c511235.webp

//https://discord.com/api/guilds/492045394327371776/widget.json 
//https://discord.com/api/guilds/492045394327371776

import TypeAnimation from 'react-type-animation';






const Events = (prop) => {
  
  const handleOrderCompleted = React.useCallback(() => {
    console.log('Order was completed successfully');
  }, []);

  const modalButtonCheckout = useEventbrite({
    eventId: `444382168027`,
    modal: true,
    onOrderComplete: handleOrderCompleted,
  });

  return (
    <>
      <div className="w-full rounded h-[120px] col-span-2 bg-[#f0f0f0] flex justify-between flex-col">
         <div id="my-app">
          {/* guard for null - resolves when Eventbrite loads */}
          {modalButtonCheckout && (
            <button id={modalButtonCheckout.id} type="button">
              Modal Checkout
            </button>
          )}
        </div>
      </div>
    
      <div className="w-full rounded h-[120px] col-span-2 flex justify-between flex-col mt-3">
          <div className="">
            <p className="max-w-[250px] text-center mx-auto font-semibold text-xl text-white">
              Have an idea for an Event?
            </p>
            <div className="mt-4 h-10 w-40 shadow bg-[#0f7ca7] hover:bg-[#00b1ff] focus:shadow-outline focus:outline-none text-center text-white font-bold py-2 px-4 rounded mx-auto cursor-pointer">
              <Link to="/Contact">
              Contact Us
              </Link>
            </div>
            <p className="text-sm text-center text-white">Recommend an Event</p>
          </div>
          <div className="flex-grow"></div>
      </div>
    </>
    

    
  );
};


export default Events;