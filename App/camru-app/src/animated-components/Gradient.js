import React, { useEffect, useState } from "react";
import './Gradient.css';

const Gradient = (props) => {

 return (
        <div class={"gradient "+ props.styles}></div>

 );
}


export default Gradient;