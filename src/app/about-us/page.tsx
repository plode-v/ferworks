'use client'
import BookingModal from '@/components/BookingModal'
import Header from '@/components/Header'
import React from 'react';
import { aboutUs } from '@/lib/data';

// h1: uppercase font-[500] 2xl:text-[34px] lg:text-[28px] md:text-[22px] text-[20px] lg:pb-5 pb-3
// p: 2xl:text-[21px] lg:text-[18px] md:text-[16px] text-[18px] font-[300] leading-relaxed md:leading-normal


const page = () => {

  return (
    <div className='h-max bg-neutral-50 w-full flex items-center justify-center'>
      <div className='h-full md:w-[97%] w-full 3xl:w-full items-center flex flex-col'>
        <Header header='about us' />
        <div className='max-h-full items-center flex flex-col 2xl:gap-32 lg:gap-24 md:gap-16 gap-14 2xl:py-32 lg:py-24 md:py-16 py-14 text-center md:w-2/3 w-[90%] 3xl:w-1/3'>
          {aboutUs.map((sec, idx) => (
            <div
              key={idx}
            >
              <h1 className='uppercase font-[500] 2xl:text-[34px] lg:text-[28px] md:text-[22px] text-[20px] lg:pb-5 pb-3'>{sec.h1}</h1>
              <p className='2xl:text-[21px] lg:text-[18px] md:text-[16px] text-[18px] font-[300] leading-relaxed md:leading-normal'>{sec.p}</p>
            </div>
          ))}
        <BookingModal 
          buttonClass='bg-blue-500 text-white lg:py-4 lg:px-7 md:py-3 md:px-4 py-4 px-5 rounded-full booking-section booking-left after:rounded-[10rem] md:text-[12px] lg:text-[18px]'
          buttonString='Book a Free Call Now'
        />
          </div>
      </div>
    </div>
  )
}

export default page