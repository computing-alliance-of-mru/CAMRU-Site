import React, { useState, useEffect, useRef } from 'react'
import CELLS from 'vanta/dist/vanta.cells.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaCells = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(CELLS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color1: 0x023048,
        color2: 0x0091CA,
        size: 0.05,
        speed: 1.50,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className={"top-0 w-full -z-10 " + props.styles} ref={myRef}>

  </div>
}


export default VantaCells;