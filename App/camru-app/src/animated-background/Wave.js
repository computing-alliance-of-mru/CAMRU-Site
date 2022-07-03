import React, { useEffect, useState } from "react";
import './waves.css';

const Waves = (props) => {

 return (
    <div class="wave-container">


        <div class="header">


        <div class="inner-header flex">

      

        </div>


            <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(1,58,93, 0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,124,175, 0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,145,202, 0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255, 255, 255, 1)" />
                </g>
                </svg>
            </div>


        </div>



    </div>
 );
}


export default Waves;