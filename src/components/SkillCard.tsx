import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface SkillCardProps  {
name : string,
imgUrl: string
widthHeight: number
}

const SkillCard = ({name, imgUrl, widthHeight}:SkillCardProps) => {
  return (
    <div className='p-4 bg-neutral-500/10 rounded-lg'>
      <div className='grid grid-cols-1 justify-center items-center'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='mx-auto'>
            <Image src={`/${imgUrl}`} alt="html5.svg" width={widthHeight} height={widthHeight} />
          </div>
          <div className='flex items-center justify-center'>
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard