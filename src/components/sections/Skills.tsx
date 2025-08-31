'use client'
import { skills } from '@/constant'
import React, { useState } from 'react'
import SkillCard from '../SkillCard'
import SkillsTab from '../SkillsTab'

export type Categories = 'all' | 'frontend' | 'backend' | 'tools'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<Categories>('all')

  const filteredSkills = selectedCategory === 'all'
  ? skills
  : skills.filter(skill => skill.category.includes(selectedCategory))

  return (
    <section className='wrapper py-24'>
      <div className='mb-12'>
        <h2 className='text-xl text-neutral-50/60 mb-4'>Skills</h2>
        <p className='text-3xl lg:text-4xl font-medium max-w-xl'>Technologies and tools that I use in building websites.</p>
      </div>

      <SkillsTab selected={selectedCategory} onSelect={setSelectedCategory}/>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6 mt-12 max-w-6xl mx-auto'>
          {filteredSkills.map(skill => (
            <SkillCard key={skill.name} name={skill.name} imgUrl={skill.logo} widthHeight={35}/>
          ))}
      </div>




    </section>
  )
}
