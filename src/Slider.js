import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import './Slider.css'

const V_THRESHOLD = 0.2
const colors = [
  '--cyan',
  '--purple',
  '--orange'
]
const cards = colors.length
const cardsCount = colors => document.documentElement.style.setProperty('--cards', cards)

export default function Slider() {
  const [xPos, setXPos] = useState(0)
  const { x } = useSpring({
    x: xPos * 600
  })

  const bind = useDrag(({ last, vxvy: [vx] }) => {
    if (last) {
      // swipe left is when horizontal velocity is inferior to minus threshold
      if (vx < -V_THRESHOLD && xPos > -cards + 1) {
        setXPos(xp => xp - 1);
      }
      // swipe right is when horizontal velocity is superior to threshold
      else if (vx > V_THRESHOLD && xPos < 0) setXPos(xp => xp + 1)
    }
  })

  cardsCount()

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className="slider">
      <animated.div {...bind()} style={{ x }}>
        {colors.map((src, i) => (
          <div
            key={`card${i}`}
            className="card"
            style={{backgroundColor: `rgba(var(${src}))`}}
          />
        ))}
      </animated.div>
    </div>
  )
}
