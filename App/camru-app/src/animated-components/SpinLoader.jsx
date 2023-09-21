import React, { useEffect, useState } from "react";
import './SpinLoader.css';

const Waves = (props) => {

 return (
        <div class="spinLoaderContainer w-full h-[100%] flex align-middle justify-center">
            <div class="spin-loader" aria-hidden="true"></div>
        </div>

 );
}


export default Waves;