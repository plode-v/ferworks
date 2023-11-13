'use client'
import React, { useEffect, useState } from 'react'
import BookingModal from './BookingModal';
import Link from 'next/link';


const BookingSection = () => {

  return (
    <div className='w-full bg-neutral-50 h-[650px] flex items-center justify-evenly flex-col z-50'>
      <div className='flex justify-center items-center w-full'>
        <h1 className='capitalize font-[700] text-4xl text-gray-800'>get in touch</h1>
      </div>
      <div className='flex w-full 3xl:w-1/2 duration-300 items-center justify-center gap-20'>
        <BookingModal 
          buttonClass='bg-blue-500 text-white h-[400px] w-1/4 text-[18px] rounded-2xl booking-section booking-left after:rounded-2xl'
          buttonString='Book Now'
        />
        <Link href="contact-us" className='bg-blue-500 text-white h-[400px] w-1/4 text-[18px] rounded-2xl booking-section booking-right after:rounded-2xl justify-center items-center flex'>Contact Us</Link>
      </div>
    </div>
  )
}


export default BookingSection