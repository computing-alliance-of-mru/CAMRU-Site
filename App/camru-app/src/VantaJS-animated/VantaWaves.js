import React, { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaWaves = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current,
        mouseControls: false,
        shininess: props.shininess,
        waveHeight: props.waveHeight,
        waveSpeed: props.waveSpeed,
        color: props.color,
        zoom: 1,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className={"absolute top-0 w-full -z-10 " + props.styles} ref={myRef}>
    
  </div>
}


export default VantaWaves;