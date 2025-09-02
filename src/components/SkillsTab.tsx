"use client"

import React from "react"
import { motion } from "framer-motion"
import { Categories } from "./sections/Skills"

type SkillsTabProps = {
  selected: Categories
  onSelect: (category: Categories) => void
}

export default function SkillsTab({ selected, onSelect }: SkillsTabProps) {
  const categories: { key: Categories; label: string }[] = [
    { key: "all", label: "All" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "tools", label: "Tools" },
  ]

  return (
    <div
      role="tablist"
      aria-label="Skills categories"
      className="flex items-center justify-center gap-8 lg:gap-20 text-lg relative"
    >
      {categories.map(({ key, label }) => {
        const isActive = selected === key

        return (
          <motion.button
            key={key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(key)}
            className={`relative pb-1 focus:outline-none transition-colors duration-300 ${
              isActive
                ? "text-purple-500 font-semibold"
                : "text-neutral-400 hover:text-purple-400"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}

            {isActive && (
              <motion.span
                layoutId="activeTab" // shared layout for smooth sliding
                className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full"
                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              />
            )}
          </motion.button>
        )
      })}
    </div>
  )
}
