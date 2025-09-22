'use client'
import React from 'react'
import Image from 'next/image'
import { HiX, HiMenu } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion"
import { navLinks } from '@/constant';
import { fade, mobileMenu, mobileMenuLink } from '@/utils/motions';
import { useMobileMenu } from '@/hooks/useMobileMenu';

const Header = () => {
  const { isOpen, toggleMenu, closeMenuByNavlist } = useMobileMenu()

const HomeHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  closeMenuByNavlist()
  window.scrollTo({ top: 0, behavior: "smooth" })
}

  return (
    <motion.header
      variants={fade(0.6, 0)}
      initial="hidden"
      animate="show"
      className='fixed top-0 left-0 right-0 z-50 w-full bg-background'>
      <div  className='relative wrapper py-6  flex items-center justify-between z-40'>

        <a href={`/`} className='flex items-center gap-3' onClick={HomeHandler}>
          <Image src="/cob-white.svg" alt="/" width={28} height={28} priority className='flex-none hidden dark:block'/>
          <Image src="/cob-blk.svg" alt="/" width={28} height={28} priority className='flex-none block dark:hidden'/>
          {/* <Image src="/cb.svg" alt="/" width={32} height={32} priority className='flex-none invert dark:invert-0'/> */}
          <h2 className='font-bold text-lg'>Cezar</h2>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            {navLinks.map(link => (
              <a href={link.url} key={link.title} 
              className={`
                
                ${link.id === "cta_contact" ? "px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors" : "nav_item"}
              `}
              >
                {link.title}
              </a>
            ))}
          </ul>
        </nav>



        <button className='md:hidden' onClick={toggleMenu}>
            {
              isOpen? <HiX size={32}/> : <HiMenu  size={32}/> 
            }
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="show"
            exit="exit"
            className="top-0 absolute left-0 right-0 h-screen bg-background flex flex-col items-center"
          >
            <nav className="mx-auto px-5 w-full h-full flex">
              <ul className=" flex flex-col items-center justify-center space-y-6 w-full text-lg">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.title}
                    variants={mobileMenuLink}
                    onClick={closeMenuByNavlist}
                    className='p-2 w-44 flex items-center justify-center'
                  >
                    <a href={link.url}
                    onClick={closeMenuByNavlist}
                    className={`
                      
                      ${link.id === "cta_contact" ? "px-7 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors" : "nav_item"}
                    `}
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  )
}

export default Header