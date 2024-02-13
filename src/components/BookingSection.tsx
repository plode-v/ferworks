'use client'
import React, { useEffect, useState } from 'react'
import BookingModal from './BookingModal';
import image1 from '../../public/img-1.jpg';
import Image from 'next/image';


const BookingSection = () => {

  return (
    <div className='w-full 2xl:h-[500px] md:h-[250px] xl:h-[400px] bg-neutral-50 flex items-center justify-center flex-col overflow-hidden'>
      <div className='bg-neutral-800 flex duration-300 items-center justify-center lg:gap-10 md:gap-5 3xl:w-1/2 w-full h-full overflow-hidden relative rounded-2xl'>
        <Image src={image1} alt='booking-image' className='h-full w-full object-cover 3xl:object-cover absolute blur-lg opacity-50 scale-110 3xl:scale-125' />
        <p className='lg:text-[32px] md:text-lg z-10 text-white font-[600]'>Schedule a call with us now</p>
        <BookingModal 
          buttonClass='bg-blue-500 text-white px-8 py-4 lg:text-[18px] md:text-md rounded-full booking-section booking-left after:rounded-full'
          buttonString='Book Now'
        />
      </div>
    </div>
  )
}


export default BookingSection