'use client'
import React from 'react'
import BookingModal from './BookingModal'

const HeroBanner = () => {
  return (
    <div className='lg:h-[700px] md:h-[420px] relative bg-neutral-100 flex flex-col items-center justify-center'>
      <p className='font-[800] top-1/2 absolute right-10 lg:text-[80px] text-[40px] opacity-20 uppercase'>add animated image</p>
        <div className='flex flex-col justify-center h-3/4 pl-[7%] w-full 3xl:w-2/3 duration-300'>
            <div className='w-max lg:pb-20 md:pb-10'>
                <h1 className='lg:text-[54px] font-[600] capitalize md:text-[24px]'>service starts at $55</h1>
                <p className='lg:text-[18px] md:text-[14px]'>Let us secure your home and repair your devices</p>
            </div>
            <div className='w-max'>
              <BookingModal 
                buttonClass='bg-blue-500 text-white lg:py-4 lg:px-7 md:py-3 md:px-4 rounded-full booking-section booking-left after:rounded-[10rem] md:text-[12px] lg:text-[1rem]'
                buttonString='Book an Appointment'
              />
            </div>
        </div>
    </div>
  )
}

export default HeroBanner