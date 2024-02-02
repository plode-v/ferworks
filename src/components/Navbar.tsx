'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { Button } from './ui/button';
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = () => {

  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    const scrollingDown = currentPosition > prevScroll;

    setVisible(!scrollingDown);
    setPrevScroll(currentPosition);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <div className='w-full flex items-top justify-center h-full'>
      <div className={`lg:h-[100px] md:h-[50px] justify-center flex items-center border-b lg:px-16 border-black/20 w-[97%] 3xl:w-1/2 fixed z-30 3xl:justify-center backdrop-blur-lg bg-neutral-50/80`}>
        <div className='flex w-full items-center justify-between h-full'>
          <Link className='text-black no-underline' href="/">
            <div>Logo</div>
          </Link>
          <div className='flex gap-5 items-center uppercase font-[500] tracking-tight text-black lg:text-[14px] md:text-[12px]'>
            <p className='font-[200] tracking-wider'>(949) 430-1028</p>
            <Link href="about-us">
              About Us
            </Link>
            <Link href="contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

// ${visible ? 'transform translate-y-0' : '-translate-y-[calc(0.75rem+70px)]'}
// bg-[#429ef5]