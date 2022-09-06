//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha


import Navbar from './Navbar.js';
import VantaTopology from "../VantaJS-animated/VantaTopology";
import Footer from "./Footer.js";
import TypeAnimation from 'react-type-animation';


const WorkInProgress = (props) => {
  

  return (
    <div className="w-full h-[100vh] flex flex-col">
      <Navbar isLoggedIn={props.isLoggedIn}/>
      <VantaTopology />
      <div className="w-[100vw] h-[40px] realitive flex-grow mt-10">
        <TypeAnimation
          cursor={true}
          sequence={[
            'Under Construction.',
            2000,
            "Check Back Soon.",
            2000,
          ]}
          speed={40}
          wrapper="div"
          repeat={Infinity}
          className={"text-3xl font-bold text-white px-8"}
        />
      </div>
      <div className="w-full bottom-0" > 
        <Footer />
      </div> 
    </div>
    
  );
};


export default WorkInProgress;