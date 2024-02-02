'use client'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import BookingModal from './BookingModal'
import { BiSolidPhoneCall } from "react-icons/bi";
import FooterButton from './FooterButton';

// FIXME: INSPIRED BY BROWN UNIVERSITY WEBSITE FOOTER

const Footer = () => {
  return (
    <div className='2xl:h-[450px] lg:h-[500px] md:h-[350px] mt-10 w-full bg-gradient-to-b from-blue-600 to-sky-600 flex items-center justify-center'>
      <div className='h-full w-full 3xl:w-1/2 duration-200 flex items-center'>
        <div className='w-2/3 h-2/3 flex justify-center'>
          <div className='w-3/4 '>
            <div className='border-b border-white/50 h-2/3'>
              <p className='text-white font-[200] uppercase tracking-wider text-[16px] pb-5'>ferworks security</p>
              <div className='flex gap-10 items-center'>
                <div className='flex items-center gap-2 justify-center'>
                  <FaLocationDot className='fill-white/50 h-[22px] w-auto' />
                  <p className='capitalize text-[24px] text-white'>santa ana, CA</p>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                  <BiSolidPhoneCall className='fill-white/50 h-[22px] w-auto' />
                  {/* FIXME: make phone number clickable */}
                  <p className='capitalize text-[24px] text-white'>+1 949 999 9999</p>
                </div>
              </div>
              <div className='flex mt-5 w-max gap-5'>
                <FooterButton text='hello' link='' />
                <button>one</button>
                <button>one</button>
              </div>
            </div>
            <div className='h-max'>
              bottom
            </div>
          </div>
        </div>
        <div className='w-1/3 h-2/3 border-l-[1px] border-white/50 flex flex-col justify-start px-10 gap-5'>
          <div>logo</div>
          <p className='text-[24px] w-max italic text-[#fafafa] font-[200] tracking-wide'>company slogan</p>
          <BookingModal buttonClass='w-max py-2 text-[#fafafa] hover:text-yellow-400 text-[18px] uppercase duration-100' buttonString='Book Now' />
        </div>
      </div>
    </div>
  )
}

export default Footer