'use client'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import BookingModal from './BookingModal'
import { BiSolidPhoneCall } from "react-icons/bi";
import FooterButton from './FooterButton';
import Image from 'next/image';
import logo from "../../public/ferworks-logo.png";

const Footer = () => {
  return (
    <div className='2xl:h-[350px] lg:h-[300px] md:h-[250px] mt-10 w-full bg-gradient-to-b from-blue-600 to-sky-600 flex items-center justify-center'>
      <div className='h-full w-full 3xl:w-1/2 duration-200 flex items-center'>
        <div className='lg:w-2/3 md:w-full h-3/4 flex justify-center'>
          <div className='lg:w-3/4 md:w-[90%]'>
            <div className='border-b border-white/50 lg:h-2/3 md:h-2/3 flex flex-col items-start justify-center'>
              <p className='text-white font-[200] uppercase tracking-wider 2xl:text-[16px] lg:text-[12px] md:text-[10px] lg:pb-5 md:pb-3'>ferworks security</p>
              <div className='flex lg:gap-10 md:gap-5 items-center'>
                <div className='flex items-center lg:gap-2 gap-1 justify-center'>
                  <FaLocationDot className='fill-white/50 2xl:h-[22px] lg:h-[14px] md:text-[12px] w-auto' />
                  <p className='capitalize 2xl:text-[24px] lg:text-[16px] md:text-[14px] text-white'>orange county, CA</p>
                </div>
                <div className='flex items-center lg:gap-2 gap-1 justify-center'>
                  <BiSolidPhoneCall className='fill-white/50 2xl:h-[22px] lg:h-[16px] md:text-[14px] w-auto' />
                  <a className='capitalize 2xl:text-[24px] lg:text-[16px] md:text-[14px] text-white' href='tel:+19494301028'>(949) 430-1028</a>
                </div>
              </div>
              <div className='flex lg:mt-5 md:mt-3 w-max lg:gap-5 md:gap-2'>
                <FooterButton text='about us' link='/about-us' />
                <FooterButton text='contact us' link='/contact-us' />
              </div>
              {/* FIXME: POSSIBLY ADD A BOOKING BUTTON */}
            </div>
            <div className='h-max'>
              bottom
            </div>
          </div>
        </div>
        <div className='w-1/3 h-2/3 border-l-[1px] border-white/50 flex flex-col justify-start lg:px-10 md:px-7 lg:gap-5 md:gap-4'>
          {/* FIXME: CHANGE LOGO COLOR TO WHITE */}
          <Image src={logo} alt="logo" className='md:w-[130px]' />
          <p className='2xl:text-[24px] lg:text-[18px] md:text-[14px] w-max italic text-[#fafafa] font-[200] tracking-wide'>security is our top priority</p>
          <BookingModal buttonClass='w-max py-2 px-3 rounded-full text-[#fafafa] hover:bg-orange-500 hover:border-orange-500 hover:duration-200 2xl:text-[18px] lg:text-[16px] md:text-[14px] border uppercase duration-200' buttonString='Book Now' />
        </div>
      </div>
    </div>
  )
}

export default Footer