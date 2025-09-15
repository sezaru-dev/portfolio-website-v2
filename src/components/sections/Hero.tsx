'use client'

import React from 'react'
import { heroSectionData } from '@/constant'
import AnimatedText from '../AnimatedText'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, fade } from '@/utils/motions'

export default function Hero() {
  return (
    <section className="relative">

      {/* Background Blob */}
      <div
        className="
          absolute
          left-1/2
          top-[90vh]
          -translate-x-1/2
          rounded-full
          blur-[120px]
          lg:blur-[160px]
          [background:radial-gradient(circle_at_center,hsl(var(--blob)/0.6),hsl(var(--blob)/0))]
          w-[90vw] h-[25vh]
          sm:w-[80vw] sm:h-[28vh]
          md:w-[70vw] md:h-[30vh]
          lg:w-[60vw] lg:h-[32vh]
          min-w-[320px] min-h-[180px]
        "
      />

      {/* Animated Content */}
      <motion.div
        variants={staggerContainer(0.15, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-screen grid place-items-center py-4 relative z-20"
      >
        <motion.div
          variants={fade(0.6, 0)}
          className="text-center px-4 max-w-2xl lg:max-w-4xl"
        >
          {/* Heading with AnimatedText letters */}
          <motion.h1
            variants={fadeIn("up", "spring", 0.1, 0.8)}
            className="font-bold text-4xl md:text-5xl lg:text-6xl leading-snug"
          >
            {heroSectionData.heading.split(" ").map((word, wIndex) => (
              <span key={wIndex} className="inline-flex mr-[2%]">
                {word.split("").map((letter, lIndex) => (
                  <AnimatedText key={lIndex}>{letter}</AnimatedText>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fade(0.6, 0.3)}
            className="text-foreground/80 mt-4 text-base md:text-lg max-w-3xl mx-auto"
          >
            {heroSectionData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fade(0.6, 0.5)}
            className="flex flex-wrap gap-4 items-center justify-center mt-10"
          >
            <motion.a
              variants={fadeIn("up", "tween", 0, 0.6)}
              href="#projects"
              className="
                relative
                px-6 md:px-8 py-3
                rounded-xl
                font-medium
                text-white
                bg-purple-600
                hover:bg-purple-700
                focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-neutral-950
                transition-all duration-300
                before:absolute before:inset-0 before:rounded-xl
                before:bg-purple-500 before:blur-md before:opacity-20
                before:transition before:duration-300
                hover:before:opacity-40
                before:-z-10
              "
            >
              Explore Projects
            </motion.a>

            <motion.a
              variants={fadeIn("up", "tween", 0, 0.6)}
              href="#contact"
              className="
                relative
                px-6 md:px-8 py-3
                rounded-xl
                font-medium
                border border-foreground
                text-foreground
                hover:bg-foreground/5
                focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-neutral-950
                transition-all duration-300
                before:absolute before:inset-0 before:rounded-xl
                before:bg-foreground/5 before:blur-sm before:opacity-0
                before:transition before:duration-300
                hover:before:opacity-20 before:-z-10
              "
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
