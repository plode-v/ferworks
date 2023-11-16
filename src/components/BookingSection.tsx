'use client'
import React, { useEffect, useState } from 'react'
import BookingModal from './BookingModal';
import Link from 'next/link';


const BookingSection = () => {

  return (
    <div className='w-full bg-neutral-300 2xl:h-[500px] md:h-[300px] lg:h-[400px] flex items-center justify-evenly flex-col'>
      {/* <div className='flex justify-center items-center w-full'>
        <h1 className='capitalize font-[700] lg:text-4xl md:text-2xl text-gray-800'>get in touch</h1>
      </div> */}
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