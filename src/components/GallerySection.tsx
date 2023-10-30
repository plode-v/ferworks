'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '/public/img-1.jpg'
import image4 from '/public/img-4.jpg'
import image3 from '/public/img-3.jpg'

const images = [image1, image4, image3];

const GallerySection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
  <div className='w-full h-[700px] bg-neutral-50 flex justify-center'>
    <Carousel className='w-[1200px] h-full overflow-hidden' variant='light' wrap={true}>
        <Carousel.Item>
          <div className='flex justify-center'>
            <Image src={image1} alt='image-1'/>
          </div>
        </Carousel.Item>
        <Carousel.Item className='flex'>
          <div className=''>
            <Image src={image4} alt='image-4' className='w-full' />
          </div>
        </Carousel.Item>
        <Carousel.Item className=''>
          <div className=''>
            <Image src={image3} alt='image-3' className='w-full' />
          </div>
        </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default GallerySection