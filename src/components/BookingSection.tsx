'use client'
import React, { useState } from 'react'
import { Modal, Box } from "@mui/material"


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
          <button onClick={handleOpen} className='bg-blue-500 text-white py-3 px-8 rounded-full text-[18px]'>Book Now</button>
          <Modal
            open={open}
            onClose={handleClose}
            className='h-full w-full'
          >
            <Box
            
            sx={{
              backgroundColor: "white",
              position: "absolute",
              left: '50%',
              top: "50%",
              transform: "translate(-50%, -50%)",
              height: "80%",
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: '10px'
            }}>
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ32-7uL9mfgIIJKNblrzigMt7GN3Nb3LTkcC0RpL6WukSPcUwA8xeg7fat2r-uSVA2hIT2EPxO3?gv=true" 
                width="100%" 
                height="100%" 
              />
            </Box>
          </Modal>
        </div>
    </div>
  )
}


export default BookingSection