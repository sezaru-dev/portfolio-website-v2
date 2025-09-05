import React from 'react'
import { heroSectionData } from '@/constant'
import AnimatedText from '../AnimatedText'

export default function Hero() {
  return (
    <section className="relative ">

      <div
        className="
          absolute
          left-1/2
          top-[90vh]
          -translate-x-1/2
          rounded-full
          blur-[120px]
          lg:blur-[160px]
          [background:radial-gradient(circle_at_center,_rgba(168,85,247,0.6),_rgba(168,85,247,0))]
          w-[90vw] h-[25vh]
          sm:w-[80vw] sm:h-[28vh]
          md:w-[70vw] md:h-[30vh]
          lg:w-[60vw] lg:h-[32vh]
          min-w-[320px] min-h-[180px]
        "
      />
      
      <div className=" min-h-screen grid place-items-center py-4 relative z-20">
        <div className="text-center px-4 max-w-2xl lg:max-w-4xl">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-snug">
            {heroSectionData.heading.split(" ").map((word, wIndex) => (
              <span key={wIndex} className="inline-flex mr-[2%]">
                {word.split("").map((letter, lIndex) => (
                  <AnimatedText key={lIndex}>{letter}</AnimatedText>
                ))}
              </span>
            ))}

          </h1>
          <p className="text-white/60 mt-4 text-base md:text-lg max-w-3xl mx-auto">
            {heroSectionData.description}
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center mt-10">
            <button
              className="
                px-6 md:px-8 py-3
                rounded-lg 
                font-medium 
                text-white 
                bg-purple-600
                hover:bg-purple-700
                focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-neutral-950
                transition-colors duration-300
              "
            >
              Explore Projects
            </button>

            <button className="px-6 py-3 border rounded-lg">Get in touch</button>
          </div>
        </div>
      </div>
    </section>
  )
}
