import { Socials } from '@/constant'
import React from 'react'

const SocialMediaLinks = () => {
  return (
    <nav aria-label="Social media">
      <ul className='flex items-center justify-center gap-6'>
        {Socials.map((item) => (

        <li key={item.name}>
          <a 
            href={item.url} 
            target='_blank' 
            rel="noopener noreferrer" 
            aria-label={item.name}
            className='hover:text-purple-500 transition-colors ease-in-out duration-200'>
            {item.logo}
          </a>
        </li>
        ))}
      </ul>
    </nav>
  )
}

export default SocialMediaLinks