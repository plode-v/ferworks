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
    <div className='2xl:h-[450px] lg:h-[500px] md:h-[350px] mt-10 w-full bg-gradient-to-b from-blue-600 to-sky-600 flex items-center justify-center'>
      <div className='h-full w-full 3xl:w-1/2 duration-200 flex items-center'>
        <div className='w-2/3 h-2/3 flex justify-center'>
          <div className='w-3/4 '>
            <div className='border-b border-white/50 h-2/3'>
              <p className='text-white font-[200] uppercase tracking-wider text-[16px] pb-5'>ferworks security</p>
              <div className='flex gap-10 items-center'>
                <div className='flex items-center gap-2 justify-center'>
                  <FaLocationDot className='fill-white/50 h-[22px] w-auto' />
                  <p className='capitalize text-[24px] text-white'>orange county, CA</p>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                  <BiSolidPhoneCall className='fill-white/50 h-[22px] w-auto' />
                  <a className='capitalize text-[24px] text-white' href='tel:+19494301028'>(949) 430-1028</a>
                </div>
              </div>
              <div className='flex mt-5 w-max gap-5'>
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
        <div className='w-1/3 h-2/3 border-l-[1px] border-white/50 flex flex-col justify-start px-10 gap-5'>
          {/* FIXME: CHANGE LOGO COLOR TO WHITE */}
          <Image src={logo} alt="logo" className='' />
          <p className='text-[24px] w-max italic text-[#fafafa] font-[200] tracking-wide'>company slogan</p>
          <BookingModal buttonClass='w-max py-2 text-[#fafafa] hover:text-yellow-400 text-[18px] uppercase duration-100' buttonString='Book Now' />
        </div>
      </div>
    </div>
  )
}

export default Footer