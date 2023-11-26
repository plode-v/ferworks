'use client'
import React from 'react'
import BookingModal from './BookingModal'
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import HeroAnimation from "../../public/HeroAnimation.json"

const HeroBanner = () => {
  return (
    <div className='lg:h-[700px] md:h-[420px] relative bg-neutral-100 flex flex-col items-center justify-center'>
        <div className='flex justify-center h-3/4 w-full 3xl:w-1/2 duration-300 overflow-hidden'>
          <div className='flex-col flex lg:w-full  pl-[7%] justify-center'>
            <div className='lg:pb-20 md:pb-10'>
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
            <div className='lg:w-3/4 md:w-1/2 justify-center flex items-center'>
              <Player
                className='lg:h-[700px] md:h-[500px]'
                autoplay
                loop
                src="https://lottie.host/d7757b71-15a5-48c4-96b5-cce6472e1292/z2bYMmzPDM.json"
              />
          </div>
        </div>
    </div>
  )
}

export default HeroBanner