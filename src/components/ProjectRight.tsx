'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fade, fadeIn, staggerContainer } from "@/utils/motions";
import Badge from "./Badge";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

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
    <motion.div
      variants={staggerContainer(0.6, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="flex flex-col lg:grid lg:grid-cols-12 max-w-xl lg:max-w-full mx-auto lg:mx-0"
    >
      {/* Project Image */}
      <motion.a
        variants={fadeIn("left", "spring", 0, 0.8)}
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="relative lg:col-start-6 lg:col-end-13 lg:row-start-1 w-full aspect-video mx-auto group overflow-hidden order-1 rounded-md shadow-md"
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

      {/* Project Details */}
      <motion.div
        variants={fade(0.4, 0.3)}
        className="lg:col-start-1 lg:col-end-7 row-start-1 z-10 p-4 lg:p-0 text-center lg:text-left w-full order-2"
      >
        {/* Title + Label */}
        <div className="mb-4 md:mb-6">
          <p className="text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wide">
            Featured Project
          </p>
          <h3
            
            className="text-xl font-bold text-foreground"
          >
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="
            text-sm lg:text-base mb-6 leading-relaxed
            bg-neutral-100 dark:bg-neutral-800
            rounded-md lg:p-4 shadow-md
          "
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <ul className="flex items-center justify-center lg:justify-start text-sm lg:text-base flex-wrap mb-10 gap-2">
          {project.techsUsed.map((technology, index) => (
            <Badge key={index}>{technology}</Badge>
          ))}
        </ul>

        {/* CTAs */}
        <ul className="flex items-center justify-center lg:justify-start gap-4 text-sm">
          <li>
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
                flex items-center gap-2
              "
            >
              <HiOutlineExternalLink/>
              Live Demo
            </a>
          </li>
          <li>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="
                px-3 py-2 rounded-lg
                hover:bg-foreground/5
                text-foreground font-medium
                transition-all duration-300
                flex items-center gap-2
              "
            >
              <FiGithub/>
              View Code
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
