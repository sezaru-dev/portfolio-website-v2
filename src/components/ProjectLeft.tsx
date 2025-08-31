import React from 'react'
import Image from 'next/image'
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

export type Project = {
  project: {
    title: string
    description: string
    techsUsed: string[]
    image: string
    liveUrl: string
    githubUrl: string
  }
}

export default function ProjectLeft({project}:Project) {
  return (
    <div className='grid grid-cols-12'>

      <a href={project.liveUrl} target="_blank" rel="noreferrer" className='relative col-start-1 col-end-8 row-start-1 hidden lg:block w-full lg:h-72 xl:h-96 group overflow-hidden'>
        <div className='absolute top-0 left-0 right-0 w-full h-full bg-[#151515]/20 group-hover:bg-transparent z-10 transition-colors ease-in-out duration-300'/>
        <Image src={`/${project.image}`} alt={project.image} fill={true} sizes="100vw" className='object-fit group-hover:scale-105 transition-all ease-in-out duration-300'/>
      </a>

      <div className='col-start-2 col-end-12 lg:col-start-7 lg:col-end-13 row-start-1 z-10 p-5 bg-[#151515] lg:bg-transparent shadow-md rounded-lg lg:shadow-none lg:rounded-none text-center lg:text-right w-full'>
        <div className='mb-4 md:mb-6'>
          <p className='text-xs lg:text-sm text-primary mb-2'>Featured Project</p>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className='text-xl font-bold'>{project.title}</a>
        </div>
        <p className='text-sm lg:text-base mb-4 text-whiteSecondary lg:bg-[#151515] rounded-sm lg:shadow-md lg:p-6'>{project.description}</p>
        <ul className='flex items-center justify-center lg:justify-end text-whiteSecondary text-sm lg:text-base space-x-2 flex-wrap mb-6'>
          {project.techsUsed.map((technology, index) => (              
            <li className='px-1 py-1 rounded-md' key={index}>{technology}</li>
          ))}

        </ul>
        <ul className='flex items-center justify-center lg:justify-end gap-4 text-sm'>
          <li>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className='hover:text-primary transition-colors ease-in-out duration-300'>
              <FiGithub size={21}/>
            </a>
          </li>
          <li>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className='hover:text-primary transition-colors ease-in-out duration-300'>
              <HiOutlineExternalLink size={21}/>
            </a>
          </li>
        </ul> 
      </div>
    </div>
  )
}
