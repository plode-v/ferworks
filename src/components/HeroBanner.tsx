'use client'
import React from 'react'
import BookingModal from './BookingModal';
import { motion, Variants } from "framer-motion";

const HeroBanner = () => {

  const text = 'Your safety is our'
  const splitText = text.split(" ");

  const priority = "priority"
  const splitPriority = priority.split("");

  const textContainer: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0
      }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      }
    }
  }

  const textVariant = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  }
  
  return (
    <div className='h-[60vh] md:h-[50vh] xl:h-screen 2xl:h-[750px] w-full max-w-screen overflow-hidden bg-neutral-50 flex flex-col items-center justify-center lg:pt-[100px] md:pt-[50px] pt-[80px]'>
      <div className='h-full w-full 3xl:w-1/2 duration-200'>
        <div className='h-full w-full flex items-center justify-center flex-col md:gap-5 gap-4'>
          <motion.div 
            className='flex flex-col lg:flex-row  items-center justify-center lg:text-[64px] md:text-[50px] 3xl:text-[62px] text-[40px] lg:gap-4 gap-0 leading-snug sm:leading-tight lg:leading-normal'
            initial="hidden"
            animate="visible"
            variants={textContainer}
          >
            <motion.div className='flex lg:gap-3 sm:gap-2 gap-1'>
              {splitText.map((letter, idx) => (
                <motion.h1
                  key={idx}
                  className='font-[800] text-black/80'
                  variants={textVariant}
                >
                  {letter}
                </motion.h1>
              ))}
            </motion.div>
            <motion.div className='flex'>
              {splitPriority.map((letter, idx) => (
                <motion.h1
                  key={idx}
                  className='md:tracking-wider tracking-wide font-[900] uppercase text-sky-500'
                  variants={textVariant}
                >
                  {letter}
                </motion.h1>
              ))}
            </motion.div>
          </motion.div>
          <motion.p 
            className='md:w-max w-full text-center text-black/90 lg:text-[20px] md:text-[18px] text-[0.7rem]'
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            contact us now to explore reliable, budget-friendly security options. <br /> Your safety and the functionality of your devices are our priorities!
            </motion.p>
        <BookingModal 
          buttonClass='bg-blue-500 text-white lg:py-4 lg:px-7 md:py-3 md:px-4 py-3 px-5 rounded-full booking-section booking-left after:rounded-[10rem] md:text-[12px] lg:text-[18px] text-[16px]'
          buttonString='Book an Appointment'
        />
        <p className='text-black/90 capitalize md:text-[12px] text-[12px]'>free estimates | reliable | trustworthy</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner