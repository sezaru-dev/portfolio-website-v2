import React from 'react'

type BadgeProps = {
  children: string | React.ReactNode
}

export default function Badge({children}: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs lg:text-sm font-medium bg-neutral-800/80 text-white border border-neutral-700 shadow-sm">
      {children}
    </span>

  )
}
