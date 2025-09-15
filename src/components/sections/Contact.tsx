'use client'

import React from 'react'
import { ContactSectionText, emailLink } from '@/constant'
import AnimatedText from '../AnimatedText'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '@/utils/motions'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="wrapper py-24"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Heading */}
      <motion.div
        variants={fadeIn("up", "tween", 0, 0.6)}
        className="mb-12 text-center"
      >
        <h2 className="text-neutral-50/60 mb-4 tracking-widest uppercase">
          {ContactSectionText.heading}
        </h2>
        <p className="text-3xl lg:text-4xl font-medium max-w-xl mx-auto">
          {ContactSectionText.subheading.split(" ").map((word, wIndex) => (
            <span key={wIndex} className="inline-flex mr-[2%]">
              {word.split("").map((letter, lIndex) => (
                <AnimatedText key={lIndex}>{letter}</AnimatedText>
              ))}
            </span>
          ))}
        </p>
      </motion.div>

      {/* Description */}
      <motion.div
        variants={fadeIn("up", "tween", 0.1, 0.6)}
        className="text-center mb-10"
      >
        <p className="text-lg md:text-xl lg:w-1/2 mx-auto leading-loose font-light">
          {ContactSectionText.description}
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.6)}
        className="mt-12 text-center"
      >
        <a
          href={`mailto:${emailLink}`}
          target='_blank'
          rel="noopener noreferrer" 
          className="relative
                px-6 md:px-8 py-3
                rounded-xl
                font-medium
                text-white
                bg-purple-600
                hover:bg-purple-700
                focus:ring-2 focus:ring-purple-400
                transition-all duration-300
                before:absolute before:inset-0 before:rounded-xl
                before:bg-purple-500 before:blur-md before:opacity-20
                before:transition before:duration-300
                hover:before:opacity-40
                before:-z-10"
        >
          Let’s Connect
        </a>
      </motion.div>
    </motion.section>
  )
}
