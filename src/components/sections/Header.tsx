import React from 'react'
import { navLinks } from '@/constant'

export default function Header() {
  return (
    <header className='wrapper  w-full left-1/2 -translate-x-1/2 fixed z-50 flex items-center justify-between p-6 rounded-lg mt-6'>
      <h2>Cezar</h2>
      <nav className='hidden md:block'>
        <ul className='flex items-center justify-between gap-6'>
          {
            navLinks.map((link, index) => (
              <li key={index}>{link.title}</li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
