import React from 'react'
import ReviewComponent from './ReviewComponent'

const Testimonials = () => {
  return (
    <div className='2xl:h-[800px md:h-[550px] lg:h-[700px] w-full flex items-center justify-center lg:pb-8 bg-white'>
      <div className='flex flex-col 2xl:h-[85%] h-full w-full 3xl:w-1/2 duration-300 items-center md:justify-evenly justify-center'>
        <div className='lg:pb-[50px]'>
          <h1 className='leading-none md:text-[30px] lg:text-[40px] font-[600] text-[#1d1d1d]'>Testimonials</h1>
        </div>
        <div className='w-[95%] flex 2xl:h-full lg:h-2/3 md:h-[65%] justify-center lg:gap-14 md:gap-5'>
          <ReviewComponent />
          <ReviewComponent />
          <ReviewComponent />
        </div>
      </div>
    </div>
  )
}

export default Testimonials