'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import image1 from '/public/img-1.jpg'
import image4 from '/public/img-4.jpg'
import image3 from '/public/img-3.jpg'
import image2 from "/public/img-2.jpg"

const images = [image1, image4, image3, image2];

const GallerySection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const newSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const interval = setInterval(newSlide, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
      <div className='w-full lg:h-[600px] md:h-[450px] bg-neutral-50 flex items-center justify-center'>
        <div className="w-full 3xl:w-1/2 3xl:rounded-lg duration-300">
          <div className='overflow-hidden flex w-max'>
            <div className='carousel-slide'>
              <Image src={image1} alt='image-1' className='h-[500px] w-[500px] object-cover mx-5'/>
              <Image src={image4} alt='image-4' className='h-[500px] w-[500px] object-cover mx-5'/>
              <Image src={image2} alt='image-2' className='h-[500px] w-[500px] object-cover mx-5'/>
              <Image src={image3} alt='image-3' className='h-[500px] w-[500px] object-cover mx-5'/>
            </div>
            <div className='carousel-slide'>
              <Image src={image1} alt='image-1' className='h-[500px] w-[500px] object-cover mx-5'/>
              <Image src={image4} alt='image-4' className='h-[500px] w-[500px] object-cover mx-5'/>
              <Image src={image2} alt='image-2' className='h-[500px] w-[500px] object-cover mx-5'/>
              <Image src={image3} alt='image-3' className='h-[500px] w-[500px] object-cover mx-5'/>
            </div>
          </div>

        </div>
      </div>
  )
}

export default GallerySection