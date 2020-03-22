import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import './Slider.css'

const V_THRESHOLD = 0.2
const scc = [
  '--cyan',
  '--purple',
  '--orange',
]

export default function Slider() {
  const [xPos, setXPos] = useState(0)
  const { x } = useSpring({
    x: xPos * 600
  })

  const bind = useDrag(({ last, vxvy: [vx] }) => {
    if (last) {
      // swipe left is when horizontal velocity is inferior to minus threshold
      if (vx < -V_THRESHOLD && xPos > -2) {
        setXPos(xp => xp - 1);
      }
      // swipe right is when horizontal velocity is superior to threshold
      else if (vx > V_THRESHOLD && xPos < 0) setXPos(xp => xp + 1)
    }
  })

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className="slider">
      <animated.div {...bind()} style={{ x }}>
        {scc.map((src, i) => (
          <div
            key={i}
            className="card"
            style={{backgroundColor: `rgba(var(${src}))`}}
          />
        ))}
      </animated.div>
    </div>
  )
}
