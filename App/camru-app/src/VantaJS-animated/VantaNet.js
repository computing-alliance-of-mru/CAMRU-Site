import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min.js'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaNet = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scaleMobile: 1.00,
        color: 0x0091CA,
        backgroundColor: 0x023048,
        points: 12.00,
        maxDistance: 23.00,
        spacing: 16.00,
        scale: 1.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className={"absolute top-0 w-full -z-10 " + props.styles} ref={myRef}>
    
  </div>
}


export default VantaNet;