import React from 'react'
import ReviewComponent from './ReviewComponent'

const Testimonials = () => {
  return (
    <div className='h-[800px] w-full flex items-center justify-center mb-8'>
      <div className='flex flex-col h-[85%] w-full 3xl:w-1/2 duration-300 items-center justify-center'>
        <div className='pb-[50px]'>
          <h1 className='leading-none text-[40px] font-[600] text-[#1d1d1d]'>Testimonials</h1>
        </div>
        <div className='w-[95%] flex h-full justify-center gap-14'>
          <ReviewComponent />
          <ReviewComponent />
          <ReviewComponent />
        </div>
      </div>
    </div>
  )
}

export default Testimonials