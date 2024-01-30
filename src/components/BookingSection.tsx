'use client'
import React, { useEffect, useState } from 'react'
import BookingModal from './BookingModal';
import image1 from '../../public/img-1.jpg';
import Image from 'next/image';


const BookingSection = () => {

  return (
    <div className='w-full bg-neutral-800 2xl:h-[500px] md:h-[300px] lg:h-[400px] flex items-center justify-center flex-col relative overflow-hidden z-10'>
      <div className='flex duration-300 items-center justify-center lg:gap-10 md:gap-5'>
        <Image src={image1} alt='booking-image' className='h-full object-cover absolute blur-lg opacity-50 scale-110 3xl:scale-125' />
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