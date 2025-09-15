'use client'
import { projects, ProjectSectionText } from '@/constant'
import React from 'react'
import ProjectLeft from '../ProjectLeft'
import ProjectRight from '../ProjectRight'
import ProjectCard from './ProjectCard'
import AnimatedText from '../AnimatedText'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motions'

export default function Projects() {
  return (
    <motion.section id='projects' className='wrapper py-32 overflow-hidden'
      variants={staggerContainer(0.15, 0)} // 👈 apply stagger container
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      >
      <motion.div className='mb-24' variants={fadeIn("right", "spring", 0, 0.6)}>
        <h2 className='uppercase tracking-widest text-foreground/60 mb-4'>{ProjectSectionText.heading}</h2>
        <p className='text-3xl lg:text-4xl font-medium max-w-xl'>
          {ProjectSectionText.description.split(" ").map((word, wIndex) => (
              <span key={wIndex} className="inline-flex mr-[2%]">
                {word.split("").map((letter, lIndex) => (
                  <AnimatedText key={lIndex}>{letter}</AnimatedText>
                ))}
              </span>
            ))}
          </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:hidden gap-16 md:gap-6 lg:gap-48 mb-8'>
        {projects.map((project, index) => {
            return (
              <ProjectCard key={index} project={project}/>
            )
          })
        }
      </div>
      <div className='hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-32 md:gap-6 lg:gap-48 mb-8 max-w-7xl mx-auto'>
        {projects.map((project, index) => {
            if (index % 2 === 1) {
            return <ProjectLeft key={index} project={project}/>
          }
            return <ProjectRight key={index} project={project}/>
          })
        }
      </div>

    </motion.section>
  )
}
