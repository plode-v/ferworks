'use client'
import React from 'react'
import BookingModal from './BookingModal'
import Image from 'next/image';
import image1 from '../../public/img-1.jpg'

const HeroBanner = () => {
  return (
    <div className='lg:h-[750px] md:h-[420px] relative bg-neutral-100 flex flex-col items-center justify-center'>
        <div className='flex justify-center h-full w-full duration-300 overflow-hidden relative'>
          <div className='h-full w-full bg-blue-900 absolute z-10 opacity-5' />
          <Image src={image1} alt='hero' className='absolute w-full object-cover blur-xl -translate-y-24 3xl:-translate-y-1/4 3xl:-translate-x-0 3xl:scale-105 -translate-x-12 scale-125 brightness-50 duration-300' />
          <div className='flex-col flex lg:w-full 3xl:w-2/3 duration-300 justify-center z-20 items-center gap-10'>
            <div className=' text-white flex items-center justify-center flex-col'>
                <h1 className='lg:text-[54px] font-[600] capitalize md:text-[24px]'>ferworks security camera installation</h1>
                <p className='w-1/2 text-center lg:text-[18px] md:text-[14px] opacity-80'>Contact us now to explore reliable, budget-friendly security options. Your safety and the functionality of your devices are our priorities!</p>
            </div>
            <div className='w-max'>
              <BookingModal 
                buttonClass='bg-blue-500 text-white lg:py-4 lg:px-7 md:py-3 md:px-4 rounded-full booking-section booking-left after:rounded-[10rem] md:text-[12px] lg:text-[1rem]'
                buttonString='Book an Appointment'
              />
            </div>
          </div>
        </div>
            <div className='relative w-1/3 flex items-center justify-center'>
              <p className='text-white absolute bottom-10 z-50 capitalize opacity-90'>free estimates | reliable | trustworthy</p>
            </div>
    </div>
  )
}

export default HeroBanner