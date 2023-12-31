'use client'
import React, { useEffect, useState } from 'react'
import BookingModal from './BookingModal';
import Link from 'next/link';


const BookingSection = () => {

  return (
    <div className='w-full bg-neutral-300 2xl:h-[500px] md:h-[300px] lg:h-[400px] flex items-center justify-evenly flex-col relative'>
      <p className='absolute top-10 font-[700] uppercase opacity-20 text-[75px]'>add stock image</p>
      <div className='flex w-full 3xl:w-1/2 duration-300 items-center justify-center lg:gap-10 md:gap-5'>
        <p className='lg:text-xl md:text-lg'>Schedule a call with us now</p>
        <BookingModal 
          buttonClass='bg-blue-500 text-white px-8 py-4 lg:text-[18px] md:text-md rounded-full booking-section booking-left after:rounded-full'
          buttonString='Book Now'
        />
      </div>
    </div>
  )
}


export default BookingSection