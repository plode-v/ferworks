'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import image1 from '/public/img-1.jpg'
import image4 from '/public/img-4.jpg'
import image3 from '/public/img-3.jpg'
import image2 from "/public/img-2.jpg"
import image5 from "/public/img-5.png";

const images = [image1, image4, image3, image2];

const GallerySection = () => {

  return (
      <div className='w-full lg:h-[400px] md:h-[350px] xl:h-[600px] bg-neutral-50 flex items-center justify-center md:my-10'>
        <div className="w-full 3xl:w-1/2 overflow-hidden rounded-xl duration-300">
          <div className='overflow-hidden flex items-center justify-center w-max'>
            <div className='carousel-slide'>
              <Image src={image1} alt='image-1' />
              <Image src={image4} alt='image-4' />
              <Image src={image2} alt='image-2' />
              <Image src={image5} alt='image-5' />
              <Image src={image3} alt='image-3' />
            </div>
            <div className='carousel-slide'>
              <Image src={image1} alt='image-1' />
              <Image src={image4} alt='image-4' />
              <Image src={image2} alt='image-2' />
              <Image src={image5} alt='image-5' />
              <Image src={image3} alt='image-3' />
            </div>
          </div>

        </div>
      </div>
  )
}

export default GallerySection