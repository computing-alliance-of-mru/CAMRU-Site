//https://w3collective.com/react-contact-form/
//https://www.npmjs.com/package/react-google-recaptcha does not work with react well
//https://github.com/sarneeh/reaptcha


import Navbar from './Navbar.jsx';
import VantaTopology from "../VantaJS-animated/VantaTopology.jsx";
import Footer from "./Footer.jsx";
import TypeAnimation from 'react-type-animation';


const WorkInProgress = (props) => {


  return (
    <div className="w-full h-[100vh] flex flex-col">
      <Navbar />
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
      <div className="bottom-0 w-full" >
        <Footer />
      </div>
    </div>

  );
};


export default WorkInProgress;