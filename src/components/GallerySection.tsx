'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '/public/img-1.jpg'
import image2 from '/public/img-2.jpg'
import image3 from '/public/img-3.jpg'

const GallerySection = () => {

  return (
    <div className='w-full h-[700px] bg-neutral-50 flex justify-center'>
      <Carousel className='w-full' variant='dark'>
        <Carousel.Item className='object-contain'>
          <div className='flex justify-center w-full'>
            <Image src={image1} alt='image-1' height={700} className='object-cover'/>
          </div>
        </Carousel.Item>
        <Carousel.Item className=''>
          <div className='flex justify-center'>
            <Image src={image2} alt='image-2' height={700} />
          </div>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default GallerySection