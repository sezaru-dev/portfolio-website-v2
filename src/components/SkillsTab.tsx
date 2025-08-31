import React from 'react'
import { Categories } from './sections/Skills'

type SkillsTabProps = {
  selected: Categories
  onSelect: (category: Categories) => void
}

export default function SkillsTab({ selected, onSelect }: SkillsTabProps) {
  const categories: { key: 'all' | 'frontend' | 'backend' | 'tools'; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'tools', label: 'Tools' },
  ]
  
  return (
    <div role="tablist" aria-label="Skills categories" className="flex items-center justify-center gap-8 lg:gap-20 text-lg">
      {categories.map(({ key, label }) => (
        <button
          key={key}
          role="tab"
          aria-selected={selected === key}
          onClick={() => onSelect(key)}
          className={`focus:outline-none ${
            selected === key ? 'text-fuchsia-500 font-medium' : 'text-neutral-400 hover:text-fuchsia-400'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )

}
