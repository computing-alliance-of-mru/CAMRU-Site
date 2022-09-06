import Navbar from './Navbar.js';
import VantaTopology from "../VantaJS-animated/VantaTopology";
import Footer from "./Footer.js";
import TypeAnimation from 'react-type-animation';
import john_travolta from '../assets/john-travolta-loop.gif';


const NoMatch = (prop) => {
  

  return (
    <div className="w-full h-[100vh] flex flex-col">
      <Navbar />
      <VantaTopology />
      <div className="w-[100vw] h-[40px] realitive flex-grow mt-10">
      <TypeAnimation
          cursor={true}
          sequence={[
            '404 Page Not found.',
            1000,
          ]}
          speed={40}
          wrapper="div"
          repeat={Infinity}
          className={"text-3xl font-bold text-white px-8"}
        />
      </div>
      <img src={john_travolta} alt="404" className="w-[50vh] h-auto bottom-0 absolute -z-10 right-0 pr-5" />
      <div className="w-full bottom-0" > 
        <Footer />
      </div> 
    </div>
    
  );
};


export default NoMatch;