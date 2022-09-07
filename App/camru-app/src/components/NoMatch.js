import Navbar from './Navbar.js';
import VantaTopology from "../VantaJS-animated/VantaTopology";
import Footer from "./Footer.js";
import TypeAnimation from 'react-type-animation';
import john_travolta from '../assets/john-travolta-loop.gif';


const NoMatch = (prop) => {
  

  return (
    <div className="w-full h-[100vh] flex flex-col">
      <Navbar />
      <div className='absolute bg-[#121212] w-full h-[100vh] -z-10'></div>
      <div className="w-full flex flex-col relative h-[calc(100vh-50px)] justify-between">
        <div className='h-[50px] pt-5'>
          <TypeAnimation
              cursor={true}
              sequence={[
                '404 Page Not found.',
                2000,
                '',
                1000,
                'wow such empty!',
                2000,
                '',
                1000,
              ]}
              speed={40}
              wrapper="div"
              repeat={Infinity}
              className={"text-3xl font-bold text-white px-8"}
            />
        </div>
        <div className='flex-grow'></div>
        <div>
          <img src={john_travolta} alt="404" className="w-[50vh] h-auto bottom-0 -z-10 right-0 pr-5 relative" />
        </div>
        <div className="w-full bottom-0" > 
          <Footer />
        </div> 
      </div>
    </div>
    
  );
};


export default NoMatch;