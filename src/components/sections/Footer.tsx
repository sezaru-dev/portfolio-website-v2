import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-400/20 p-8">
      <div className="wrapper flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-neutral-400 text-sm">
          © {new Date().getFullYear()} Cezarlito O. Baguhin. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-fuchsia-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-fuchsia-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-fuchsia-500 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}
