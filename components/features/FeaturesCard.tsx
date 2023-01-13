import Image from 'next/image'
import React, { FC } from 'react'

const FeaturesCard: FC<CardProps> = ({imageUrl, title, description}) => {
  return (
    <div className='lg:w-4/12 my-4 flex flex-col justify-center lg:items-center lg:text-center px-4 text-[#0C1B4D]'>
        <Image src={imageUrl} width={100} height={100} className='lg:w-10/12 w-11/12 mx-auto' alt='features' />
        <h2 className='lg:text-lg text-2xl font-title mt-3'>{title}</h2>
        <p className='text-sm mt-3 text-[#0C1B4D99]'>{description}</p>
    </div>
  )
}

export default FeaturesCard