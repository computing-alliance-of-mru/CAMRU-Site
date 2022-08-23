import React, { useEffect, useState } from "react";
import './SlidingDiagonals.css';

const SlidingDiagonals = (props) => {

 return (
        <div class="SlidingDiagonals">
            <div class={"bg " + props.height}>  </div>
            <div class={"bg bg2 " + props.height}>  </div>
            <div class={"bg bg3 " + props.height}>  </div>
        </div>

 );
}


export default SlidingDiagonals;