import Image from 'next/image'
import React, { FC } from 'react'

const FeaturesCard: FC<CardProps> = ({imageUrl, title, description}) => {
  return (
    <div className='w-4/12 flex flex-col justify-center items-center text-center px-4 text-[#0C1B4D]'>
        <Image src={imageUrl} width={100} height={100} className='w-10/12' alt='features' />
        <h2 className='text-lg font-title mt-3'>{title}</h2>
        <p className='text-sm mt-3 text-[#0C1B4D99]'>{description}</p>
    </div>
  )
}

export default FeaturesCard