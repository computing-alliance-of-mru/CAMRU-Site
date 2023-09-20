import React, { useEffect, useState } from "react";
import './checkbox.css';

const Checkbox = (props) => {



    const  checkType = () => {
        if(props.type) {
            return <label className="checkbox bounce flex">
                    <input type="checkbox" defaultChecked required/>
                    <svg viewBox="0 0 21 21" >
                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                    </svg>
                    <span className="pl-2 text-white">{props.text}</span>
                </label>
        } else {
            return <label className="checkbox path flex">
                    <input type="checkbox" />
                    <svg viewBox="0 0 21 21">
                        <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                    </svg>
                    <span className="pl-2 text-white">{props.text}</span>
                </label>
        }
    }

 return (
    <div className="block">
        {checkType()}
        
    </div>

 );
}


export default Checkbox;