import React, { useState, useEffect, useRef } from 'react'
import TOPOLOGY from 'vanta/dist/vanta.topology.min.js'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaTopology = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(TOPOLOGY({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0091CA,
        backgroundColor: 0x023048
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className="h-[100vh] absolute top-0 w-[100%] -z-10" ref={myRef}>
    
  </div>
}


export default VantaTopology;