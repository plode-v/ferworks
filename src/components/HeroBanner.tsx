'use client'
import React from 'react'
import BookingModal from './BookingModal';

const HeroBanner = () => {
  // FIXME: INTRO ANIMATION (RUNNING CHARACTER WHEN LOAD)
  return (
    <div className='h-[50vh] md:h-[400px] lg:h-[50vh] xl:h-screen 2xl:h-[750px] w-full max-w-screen overflow-hidden bg-neutral-50 flex flex-col items-center justify-center lg:pt-[100px] md:pt-[50px]'>
      <div className='h-full w-full 3xl:w-1/2 duration-200'>
        <div className='h-full w-full flex items-center justify-center flex-col md:gap-5'>
          <div className='flex items-center justify-center gap-4 lg:text-[54px] md:text-[24px] 3xl:text-[62px] text-[18px]'>
            <h1 className='text-black/80 font-[800] tracking-wider'>Your safety is our</h1>
            <h1 className='bg-gradient-to-r uppercase from-cyan-400 to-blue-700 text-transparent bg-clip-text font-[900] tracking-wider'>priority.</h1>
          </div>
          <p className='md:w-max w-full text-center text-black/90 lg:text-[18px] md:text-[14px] text-[12px]'>contact us now to explore reliable, budget-friendly security options. <br /> Your safety and the functionality of your devices are our priorities!</p>
          <p></p>
        <BookingModal 
          buttonClass='bg-blue-500 text-white lg:py-4 lg:px-7 md:py-3 md:px-4 rounded-full booking-section booking-left after:rounded-[10rem] md:text-[12px] lg:text-[18px]'
          buttonString='Book an Appointment'
        />
        <p className='text-black/90 capitalize md:text-[12px]'>free estimates | reliable | trustworthy</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner