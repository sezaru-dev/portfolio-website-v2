import { contact } from '@/constant'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="wrapper py-24">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-xl text-neutral-50/60 mb-4">Connect</h2>
        <p className="text-3xl lg:text-4xl font-medium max-w-xl mx-auto">
          {contact.heading}
        </p>
      </div>

      {/* Description */}
      <div className="text-center mb-10">
        <p className="text-xl lg:w-1/2 mx-auto leading-loose font-light">
          {contact.description}
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-fuchsia-500 transition-colors text-2xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-fuchsia-500 transition-colors text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-fuchsia-500 transition-colors text-2xl"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Optional CTA Button */}
<div className="mt-12 text-center">
  <a
    href="mailto:youremail@example.com"
    className="px-6 py-3 bg-purple-700 rounded-lg text-white font-medium hover:bg-purple-600 transition-colors shadow-md shadow-purple-600/30"
  >
    Send me a message
  </a>
</div>

    </section>
  )
}
