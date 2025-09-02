import React from 'react'

type BadgeProps = {
  children: string | React.ReactNode
}

export default function Badge({children}: BadgeProps) {
  return (
    <span className='inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium transition-colors bg-neutral-700'>
      {children}
    </span>
  )
}
