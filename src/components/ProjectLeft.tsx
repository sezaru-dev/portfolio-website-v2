'use client'
import React from 'react'
import Image from 'next/image'
import { FiGithub } from "react-icons/fi"
import { HiOutlineExternalLink } from "react-icons/hi"
import Badge from './Badge'
import { motion } from "framer-motion"
import { fade, fadeIn, staggerContainer } from "@/utils/motions";

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

export default function ProjectLeft({ project }: Project) {
  return (
    <motion.div variants={staggerContainer(0.6, 0.2)} initial="hidden" whileInView="show" viewport={{once: true, amount: .6}} 
     className="flex flex-col lg:grid md:grid-cols-2 lg:grid-cols-12 max-w-xl lg:max-w-full mx-auto lg:mx-0">
      {/* Image Section */}
      <motion.a
        variants={fadeIn('right','spring', 0, .8)} 
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="relative col-span-1 lg:col-start-1 lg:col-end-8 lg:row-start-1 w-full aspect-video mx-auto group overflow-hidden rounded-md"
      >
        <div className="absolute inset-0 bg-neutral-800/30 group-hover:bg-transparent z-10 transition-colors duration-300" />
        <Image
          src={`/${project.image}`}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.a>

      {/* Content Section */}
      <motion.div variants={fade(.4, .7)}
       className="col-start-2 col-end-12 lg:col-start-7 lg:col-end-13 row-start-1 z-10 p-4 bg-neutral-600/10 lg:bg-transparent shadow-md rounded-lg lg:shadow-none lg:rounded-none text-center lg:text-right w-full">
        {/* Heading */}
        <div className="mb-4 md:mb-6">
          <p className="text-xs text-purple-500 lg:text-sm mb-2">
            Featured Project
          </p>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xl font-bold"
          >
            {project.title}
          </a>
        </div>

        {/* Description */}
        <p className="text-sm lg:text-base mb-4 lg:bg-neutral-800 lg:shadow-md lg:p-6 rounded-md leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <ul className="flex items-center justify-center lg:justify-end text-xs sm:text-sm lg:text-base flex-wrap mb-6 gap-2">
          {project.techsUsed.map((technology, index) => (
            <Badge key={index}>{technology}</Badge>
          ))}
        </ul>

        {/* Links */}
        <ul className="flex items-center justify-center lg:justify-end gap-5 text-sm">
          <li>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <FiGithub size={22} />
            </a>
          </li>
          <li>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <HiOutlineExternalLink size={22} />
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}
