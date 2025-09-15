'use client'

import { AboutSectionText } from "@/constant"
import React from "react"
import AnimatedText from "../AnimatedText"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/utils/motions"

export default function About() {
  return (
    <section id="about" className="wrapper py-32">
      {/* Intro */}
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-8 mb-24"
      >
        <motion.h2
          variants={fadeIn("up", "tween", 0, 0.6)}
          className="uppercase tracking-widest text-foreground/60"
        >
          About
        </motion.h2>

        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-3xl lg:text-4xl font-semibold leading-snug"
        >
          {AboutSectionText.description.split(" ").map((word, wIndex) => (
            <span key={wIndex} className="inline-flex mr-[2%] md:mr-[1%]">
              {word.split("").map((letter, lIndex) => (
                <AnimatedText key={lIndex}>{letter}</AnimatedText>
              ))}
            </span>
          ))}
        </motion.p>

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 0.6)}
          className="max-w-3xl text-base lg:text-lg leading-relaxed text-foreground/80"
        >
          Hi, I’m Cezar. I’ve always loved the idea of creating{" "}
          <span className="font-medium text-foreground">
            “inventions” that solve problems—
          </span>{" "}
          and web development became my way to do it. I’m focused on mastering{" "}
          <span className="font-medium text-foreground">
            Next.js, React, Tailwind CSS, and TypeScript
          </span>
          , while expanding into backend tools like{" "}
          <span className="font-medium text-foreground">
            NextAuth and MongoDB
          </span>
          . For me, every line of code is part of shaping something useful,
          practical, and innovative.
        </motion.p>
      </motion.div>

      {/* Education */}
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-4 mb-24 lg:grid lg:grid-cols-1 lg:place-items-end"
      >
        <motion.h2
          variants={fadeIn("up", "tween", 0, 0.6)}
          className="text-sm uppercase tracking-widest text-foreground/60"
        >
          Education
        </motion.h2>

        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-2xl lg:text-3xl font-semibold"
        >
          Bachelor of Science in Information Technology
        </motion.p>

        <motion.p variants={fadeIn("up", "tween", 0.15, 0.6)} className="font-medium">
          Panpacific University North Philippines
        </motion.p>

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 0.6)}
          className="max-w-3xl text-foreground/80 leading-relaxed lg:text-right"
        >
          Focusing on applied programming and software creation through projects
          such as a web evaluation system and a mobile health diagnostic app,
          building skills in coding, database management, and user-focused
          application design.
        </motion.p>
      </motion.div>

      {/* Awards */}
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-6 lg:grid lg:place-items-end"
      >
        <motion.h2
          variants={fadeIn("up", "tween", 0, 0.6)}
          className="text-sm uppercase tracking-widest text-foreground/60"
        >
          Awards & Competitions
        </motion.h2>

        <motion.div variants={fadeIn("up", "tween", 0.1, 0.6)} className="space-y-4 lg:space-y-3 lg:text-right">
          <p className="font-medium">Best Programmer of the Year 2018</p>
          <div>
            <p className="font-medium">
              CCS Day Programming Competition 2015 – Champion
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              C++ challenge creating logic for order management and payment
              calculations.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
