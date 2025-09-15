import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface SkillCardProps  {
name : string,
imgUrl: string
widthHeight: number
}

const SkillCard = ({name, imgUrl, widthHeight}:SkillCardProps) => {
  return (
    <motion.article whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }} className='p-4 bg-foreground/5 border border-foreground/10 rounded-lg'>
      <div className='grid grid-cols-1 justify-center items-center'>
        <figure className='flex flex-col items-center justify-center gap-4'>
          <div className='mx-auto'>
            <Image src={`/${imgUrl}`} alt={`${name} logo`}  width={widthHeight} height={widthHeight} className={["Next", "Github"].includes(name) ? "invert dark:invert-0" : ""} />
          </div>
          <figcaption  className='flex items-center justify-center'>
            <h3 className='text-xs md:text-sm'>{name}</h3>
          </figcaption>
        </figure>
      </div>
    </motion.article>
  )
}

export default SkillCard