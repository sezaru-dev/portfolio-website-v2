'use client'
import { skills } from '@/constant'
import React, { useState } from 'react'
import SkillCard from '../SkillCard'
import SkillsTab from '../SkillsTab'
import { motion, AnimatePresence } from 'framer-motion'
import { fade, staggerContainer } from '@/utils/motions'
import AnimatedText from '../AnimatedText'


export type Categories = 'all' | 'frontend' | 'backend' | 'tools'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<Categories>('all')

  const filteredSkills = selectedCategory === 'all'
  ? skills
  : skills.filter(skill => skill.category.includes(selectedCategory))
  const sentence = 'Technologies and tools that I use in building websites.'
  return (
    <section className='wrapper py-24'>
      <div className='mb-12'>
        <h2 className='text-xl text-neutral-50/60 mb-4'>Skills</h2>
        <p className='text-3xl lg:text-4xl font-medium max-w-xl'>
          {sentence.split(" ").map((word, wIndex) => (
            <span key={wIndex} className="inline-flex mr-2">
              {word.split("").map((letter, lIndex) => (
                <AnimatedText key={lIndex}>{letter}</AnimatedText>
              ))}
            </span>
          ))}
        </p>
      </div>

      <SkillsTab selected={selectedCategory} onSelect={setSelectedCategory}/>

      <AnimatePresence mode="wait">
        <motion.ul
          key={selectedCategory} // changes whenever category changes
          className="grid grid-cols-3 md:grid-cols-4 gap-4 lg:grid-cols-5 xl:grid-cols-6 mt-12 max-w-5xl mx-auto"
          variants={staggerContainer(0.15, 0)}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.li
              key={skill.name}
              variants={fade(0.7, index * 0.07)}
              initial="hidden"
              animate="show"
              exit={{
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
  >
              <SkillCard
                name={skill.name}
                imgUrl={skill.logo}
                widthHeight={35}
              />
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </section>
  )
}
