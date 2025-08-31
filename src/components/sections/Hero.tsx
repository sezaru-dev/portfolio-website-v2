import React from 'react'
import { heroSectionData } from '@/constant'

export default function Hero() {
  return (
    <section className="relative">
      <div className=" min-h-screen grid place-items-center py-4 relative z-20">
        <div className="text-center px-4">
          <h1 className="font-bold text-4xl md:text-5xl max-w-3xl mx-auto">
            {heroSectionData.heading}
          </h1>
          <p className="text-white/60 mt-4 text-base md:text-lg">
            {heroSectionData.description}
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center mt-10">
            <button
              className="
                px-6 md:px-8 py-3
                rounded-lg 
                font-medium 
                text-white 
                bg-fuchsia-600
                hover:bg-fuchsia-700
                focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-neutral-950
                transition-colors duration-300
              "
            >
              Explore Projects
            </button>

            {/* <button className="px-6 py-3 border rounded-lg">Get in touch</button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
