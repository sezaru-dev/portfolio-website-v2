import { projects } from '@/constant'
import React from 'react'
import ProjectLeft from '../ProjectLeft'
import ProjectRight from '../ProjectRight'

export default function Projects() {
  return (
    <section className='wrapper py-24'>
      <div className='mb-12'>
        <h2 className='text-xl text-neutral-50/60 mb-4'>Projects</h2>
        <p className='text-3xl lg:text-4xl font-medium max-w-xl'>Here are the projects that I've built.</p>
      </div>

      <div className='grid grid-cols-1 gap-6 lg:gap-48 mb-8'>
        {projects.slice(0,6).map((project, index) => {
          if (index % 2 === 1) {
            return <ProjectLeft key={index} project={project}/>
          }
          return <ProjectRight key={index} project={project}/>
        })}
      </div>

    </section>
  )
}
