'use client'
import React, { useState } from 'react'
import { Modal, Box } from "@mui/material"
import BookingModal from './BookingModal';


const BookingSection = () => {

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className='w-full bg-neutral-50 h-[300px] flex items-center justify-center'>
        <div className='flex w-full h-full 3xl:w-1/2 border duration-300 items-center justify-center flex-col gap-10'>
          <span className='capitalize'>let&apos;s make your home more secure</span>
          <BookingModal 
            buttonClass='bg-blue-500 text-white text-[20px] py-5 px-8 rounded-full'
            buttonString='Book Now'
          />
        </div>
    </div>
  )
}


export default BookingSection