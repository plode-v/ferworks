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
    <div className='lg:h-[300px] xl:h-[280px] md:h-[200px] h-[130px] mt-10 w-full bg-gradient-to-b from-blue-600 to-sky-600 flex items-center justify-center'>
      <div className='h-5/6 w-full 3xl:w-1/2 duration-200 flex xl:items-center items-start'>
        <div className='lg:w-2/3 md:w-full w-full h-full flex md:justify-center items-start xl:items-center px-5 md:pl-0'>
          <div className='lg:w-3/4 md:w-[90%] xl:h-full'>
            <div className='border-b border-white/50 h-2/3 w-full flex flex-col items-start justify-center gap-2 md:gap-0'>
              <p className='text-white font-[200] uppercase tracking-wider 2xl:text-[16px] lg:text-[12px] text-[8px] lg:pb-5 md:pb-3'>ferworks security</p>
              <div className='flex flex-col md:flex-row lg:gap-10 md:gap-5 gap-1 md:items-center items-start'>
                <div className='flex items-center lg:gap-2 gap-1 justify-center'>
                  <FaLocationDot className='fill-white/50 2xl:h-[22px] lg:h-[14px] text-[12px] w-auto' />
                  <p className='capitalize 2xl:text-[24px] lg:text-[16px] md:text-[14px] text-[10px] text-white'>orange county, CA</p>
                </div>
                <div className='flex items-center lg:gap-2 gap-1 justify-center'>
                  <BiSolidPhoneCall className='fill-white/50 2xl:h-[22px] lg:h-[16px] text-[14px] w-auto' />
                  <a className='capitalize 2xl:text-[24px] lg:text-[16px] md:text-[14px] text-[10px] text-white' href='tel:+19494301028'>(949) 430-1028</a>
                </div>
              </div>
              <div className='flex lg:mt-5 md:mt-3 w-max lg:gap-5 md:gap-2 gap-4'>
                <FooterButton text='about us' link='/about-us' />
                <FooterButton text='contact us' link='/contact-us' />
              </div>
              {/* FIXME: POSSIBLY ADD A BOOKING BUTTON */}
            </div>
            <div className='h-1/3'>
              <p className='md:text-[10px] text-[8px] pt-3 md:pt-0 text-white/80'>copyright</p>
            </div>
          </div>
        </div>
        {/* FIXME: CHANGE LOGO COLOR TO WHITE */}
        <div className='md:w-1/3 w-max h-2/3 border-l-[1px] border-white/50 flex flex-col justify-start md:items-start items-end lg:px-10 md:px-7 px-5 lg:gap-5 md:gap-4 gap-2'>
          <Image src={logo} alt="logo" className='md:w-[130px] w-[85px]' />
          <p className='2xl:text-[24px] lg:text-[18px] md:text-[14px] text-[10px] w-max italic text-[#fafafa] font-[200] tracking-wide'>security is our top priority</p>
          <BookingModal buttonClass='w-max md:py-2 md:px-3 py-1 px-2 rounded-full text-[#fafafa] hover:bg-orange-500 hover:border-orange-500 hover:duration-200 lg:text-[14px] md:text-[14px] text-[8px] border uppercase duration-200' buttonString='Book Now' />
        </div>
      </div>
    </div>
  )
}

export default Footer