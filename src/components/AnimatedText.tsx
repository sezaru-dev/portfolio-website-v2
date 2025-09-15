'use client'
import {useState} from 'react'
import { motion, useAnimationControls } from 'framer-motion'

type AnimatedTextProps = {
  children: React.ReactNode | string
}

const AnimatedText = ({children}:AnimatedTextProps) => {
  const controls = useAnimationControls()
  const [isPlaying, setIsPlaying] = useState(false)

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.25, 0.75, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.15, 0.85, 1)",
        "scale3d(0.95, 1.05, 1)",
        "scale3d(1.05, .95, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        duration: 1,
        times: [0, 0.3, 0.5, 0.65, 0.75, 0.85, 1],
        ease: "easeInOut",
      },

    })

  
  setIsPlaying(true)
}
  return (
    <motion.span 
      animate={controls} 
      onMouseOver={() => {if (!isPlaying) {rubberBand()}}} 
      onAnimationComplete={() => setIsPlaying(false)}
      className='hover:text-primary inline-block'
    >{children}</motion.span>
  )
}

export default AnimatedText