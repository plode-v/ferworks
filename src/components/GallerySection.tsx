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
        <div className="flex gap-10 overflow-hidden w-full 3xl:w-1/2 3xl:rounded-lg duration-300">
          {images.map((img, idx) => (
              <div key={idx} className={`lg:h-[500px] md:h-[350px] aspect-square slider-wrapper`}>
                <Image 
                  src={img} 
                  alt={`Image-${idx+1}`} 
                  className='object-cover rounded-md md:h-[350px] lg:h-[500px]'
                />
              </div>
          ))}
        </div>
      </div>
  )
}

export default GallerySection