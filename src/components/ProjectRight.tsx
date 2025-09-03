'use client'
import React from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import Badge from "./Badge";
import { motion } from "framer-motion"
import { fade, fadeIn, staggerContainer } from "@/utils/motions";

export type ProjectProps = {
  project: {
    title: string;
    description: string;
    techsUsed: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
  };
};

export default function ProjectRight({ project }: ProjectProps) {
  return (
    
    <motion.div variants={staggerContainer(0.6, 0.2)} initial="hidden" whileInView="show" viewport={{once: true, amount: .6}} className='flex flex-col lg:grid lg:grid-cols-12 max-w-xl lg:max-w-full mx-auto lg:mx-0'>

      <motion.a
        variants={fadeIn('left','spring', 0, .8)} 
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="relative lg:col-start-6 lg:col-end-13 lg:row-start-1 w-full aspect-video mx-auto group overflow-hidden order-1 rounded-md"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-neutral-800/20 group-hover:bg-transparent z-10 transition-colors ease-in-out duration-300" />

        {/* Image */}
        <Image
          src={`/${project.image}`}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.a>

      <motion.div variants={fade(.4, .7)} className='lg:col-start-1 lg:col-end-7 row-start-1 z-10 sm: p-4 bg-neutral-600/10 lg:bg-transparent shadow-md rounded-lg lg:shadow-none lg:rounded-none text-center lg:text-left w-full order-2'>
        <div className='mb-4 md:mb-6'>
          <p className='text-xs text-purple-500 lg:text-sm mb-2'>Featured Project</p>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className='text-xl font-bold'>{project.title}</a>
        </div>
        <p className='text-sm lg:text-base mb-4 lg:bg-neutral-800 rounded-sm lg:shadow-md lg:p-6 leading-relaxed'>{project.description}</p>
        <ul className='flex items-center justify-center lg:justify-start text-whiteSecondary text-sm lg:text-base flex-wrap mb-6 gap-2'>
          {project.techsUsed.map((technology, index) => (              
            <Badge key={index}>{technology}</Badge>   
          ))}

        </ul>
        <ul className='flex items-center justify-center lg:justify-start gap-4 text-sm'>
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
      </motion.div>
      
    </motion.div>


  );
}




/* 
<div className='grid grid-cols-12'>

      <a href={project.liveUrl} target="_blank" rel="noreferrer" className='relative col-start-6 col-end-13 row-start-1 hidden lg:block w-full lg:h-72 xl:h-96 group overflow-hidden'>
        <div className='absolute top-0 left-0 right-0 w-full h-full bg-neutral-800/20 group-hover:bg-transparent z-10 transition-colors ease-in-out duration-300'/>
        <Image src={`/${project.image}`} alt={project.image} fill={true} sizes="100vw" className='object-fit group-hover:scale-105 transition-all ease-in-out duration-300'/>
      </a>

      <div className='col-start-2 col-end-12 lg:col-start-1 lg:col-end-7 row-start-1 z-10 sm: p-4 bg-neutral-800 lg:bg-transparent shadow-md rounded-lg lg:shadow-none lg:rounded-none text-center lg:text-left w-full'>
        <div className='mb-4 md:mb-6'>
          <p className='text-xs text-purple-500 lg:text-sm mb-2'>Featured Project</p>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className='text-xl font-bold'>{project.title}</a>
        </div>
        <p className='text-sm lg:text-base mb-4 text-whiteSecondary lg:bg-neutral-800 rounded-sm lg:shadow-md lg:p-6'>{project.description}</p>
        <ul className='flex items-center justify-center lg:justify-start text-whiteSecondary text-sm lg:text-base flex-wrap mb-6 gap-2'>
          {project.techsUsed.map((technology, index) => (              
            <Badge key={index}>{technology}</Badge>   
          ))}

        </ul>
        <ul className='flex items-center justify-center lg:justify-start gap-4 text-sm'>
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
*/