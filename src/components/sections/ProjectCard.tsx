'use client'
import Image from "next/image"
import React from "react"
import Badge from "../Badge"
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
     variants={fade( .6, .6)} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.2}} 
     className="max-w-lg md:max-w-full mx-auto rounded-lg overflow-hidden bg-neutral-500/10">
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
          <p className="text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wide">
            Featured Project
          </p>
          <h3 className="text-xl font-bold">{project.title}</h3>
        </header>

        <p className="text-sm lg:text-base leading-relaxed">
          {project.description}
        </p>

        <section className="space-y-2">
          
          <ul className="flex flex-wrap gap-2 text-sm lg:text-base">
            {project.techsUsed.map((technology, index) => (
              <li key={index}>
                <Badge>{technology}</Badge>
              </li>
            ))}
          </ul>
        </section>

        <footer className="pt-2">
          <ul className="flex items-center gap-2">
            <li className="relative group rounded-full">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  px-3 py-2 rounded-lg
                  bg-purple-500 hover:bg-purple-600
                  dark:bg-purple-600 dark:hover:bg-purple-700
                  text-white font-medium
                  shadow-md hover:shadow-lg
                  transition-all duration-300
                  flex items-center gap-2 text-xs
                "
              >
                Live Demo
              </a>
            </li>
            <li className="relative group rounded-full">
              <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-3 py-2 rounded-lg
                    hover:bg-foreground/5
                    text-foreground font-medium
                    transition-all duration-300
                    flex items-center gap-2 text-xs
                  "
                >
                  View Code
                </a>
            </li>
          </ul>
        </footer>
      </div>
      
    </motion.article>
  )
}
