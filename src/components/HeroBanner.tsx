'use client'
import React from 'react'
import BookingModal from './BookingModal'

const HeroBanner = () => {
  return (
    <div className='h-[calc(600px+(0.75rem+70px))] relative bg-neutral-100 flex flex-col items-center justify-center'>
        <div className='flex flex-col justify-center h-3/4 pl-[7%] w-full 3xl:w-2/3 duration-300'>
            <div className='w-max pb-20'>
                <h1 className='text-[54px] font-[600] capitalize'>service starts at $55</h1>
                <p className='text-[18px]'>Let us secure your home and repair your devices</p>
            </div>
            <div className='w-max'>
              <BookingModal 
                buttonClass='bg-blue-500 text-white py-4 px-7 rounded-[10px]'
                buttonString='Book an Appointment'
              />
            </div>
        </div>
    </div>
  )
}

export default HeroBanner