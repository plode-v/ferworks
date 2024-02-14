'use client'
import BookingModal from '@/components/BookingModal'
import Header from '@/components/Header'
import React from 'react';


const page = () => {

  return (
    <div className='h-max bg-neutral-50 w-full flex items-center justify-center'>
      <div className='h-full w-[97%] 3xl:w-full items-center flex flex-col'>
        <Header header='about us' />
        <div className='max-h-full items-center flex flex-col 2xl:gap-32 lg:gap-24 md:gap-16 2xl:py-32 lg:py-24 md:py-16 text-center w-2/3 3xl:w-1/3'>
          <div className=''>
            <h1 className='uppercase font-[500] 2xl:text-[34px] lg:text-[28px] md:text-[22px] lg:pb-5 md:pb-3'>who we are</h1>
            <p className='2xl:text-[21px] lg:text-[18px] md:text-[16px] font-[300]'>Welcome to our business, where we specialized in providing top-notch security camera installation services to keep your property safe and secure. In addition, we also offer expert computer and cell phone repair services to ensure that your devices are always in good working condition. Our skilled technicians are trained to handle a variety of devices and provide prompt and reliable service. Trust us to take care of all your security and device repair needs.</p>
          </div>
          <div className=''>
            <h1 className='uppercase font-[500] 2xl:text-[34px] lg:text-[28px] md:text-[22px] lg:pb-5 md:pb-3'>our mission</h1>
            <p className='2xl:text-[21px] lg:text-[18px] md:text-[16px] font-[300]'>Our mission is to empower individuals and businesses with advanced surveillance solutions that are reliable, user-friendly, and technologically advanced.</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            {/* FIXME: if screen is wider than tablet size, add <br/> */}
            <p className='tracking-wide 2xl:text-[21px] lg:text-[18px] md:text-[16px] font-[300]'>Ferworks is your trusted partner in cutting-edge security solutions. At Ferworks, we understarnd the importance of safeguarding what matters most to you, whether it&apos;s your home, business, or community.</p>
        </div>
        <BookingModal 
          buttonClass='bg-blue-500 text-white lg:py-4 lg:px-7 md:py-3 md:px-4 rounded-full booking-section booking-left after:rounded-[10rem] md:text-[12px] lg:text-[18px]'
          buttonString='Book a Free Call Now'
        />
          </div>
      </div>
    </div>
  )
}

export default page