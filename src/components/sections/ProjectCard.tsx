'use client'
import Image from "next/image"
import React from "react"
import Badge from "../Badge"
import { FiGithub } from "react-icons/fi"
import { HiOutlineExternalLink } from "react-icons/hi"
import { motion } from "framer-motion"
import { fade } from "@/utils/motions"

export type ProjectProps = {
  project: {
    title: string
    description: string
    techsUsed: string[]
    image: string
    liveUrl: string
    githubUrl: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <motion.article
     variants={fade( .6, .3)} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.2}} 
     className="max-w-lg md:max-w-full mx-auto rounded-lg overflow-hidden bg-neutral-800">
      <figure className="relative w-full h-60 overflow-hidden lg:rounded-lg group">
        <Image
          src={`/${project.image}`}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover group-hover:scale-105 transition-transform ease-in-out duration-300"
        />
      </figure>

      <div className="p-6 lg:p-8 space-y-6">
        <header className="space-y-2">
          <p className="text-xs text-neutral-500 lg:text-sm tracking-wide">
            FEATURED PROJECT
          </p>
          <h3 className="text-xl font-bold">{project.title}</h3>
        </header>

        <p className="text-sm lg:text-base leading-relaxed">
          {project.description}
        </p>

        <section className="space-y-2">
          <h4 className="text-xs font-medium text-neutral-400">Built With</h4>
          <ul className="flex flex-wrap gap-2 text-sm lg:text-base">
            {project.techsUsed.map((technology, index) => (
              <li key={index}>
                <Badge>{technology}</Badge>
              </li>
            ))}
          </ul>
        </section>

        <footer className="pt-2">
          <ul className="flex items-center gap-6">
            <li className="relative group rounded-full">
              <span className="absolute -top-10 whitespace-nowrap text-xs p-2 bg-neutral-900 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                View Repo
                <span className="absolute -bottom-1 left-2 w-2 h-2 bg-neutral-900 rotate-45"></span>
              </span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group-hover:text-purple-500 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FiGithub size={20} />
              </a>
            </li>
            <li className="relative group rounded-full">
              <span className="absolute -top-10 whitespace-nowrap text-xs p-2 bg-neutral-900 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Live Demo
                <span className="absolute -bottom-1 left-2 w-2 h-2 bg-neutral-900 rotate-45"></span>
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 group-hover:text-purple-500 transition-colors"
                aria-label={`View ${project.title} live demo`}
              >
                <HiOutlineExternalLink size={20} />
              </a>
            </li>
          </ul>
        </footer>
      </div>
      
    </motion.article>
  )
}
