'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import logo from "../../public/ferworks-logo.png";
import Image from 'next/image';

const Navbar = () => {

  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
  }, [screenWidth])

  return (
    <div className='w-full flex items-top justify-center h-full'>
      {
        screenWidth > 747 ?
          <div className='lg:h-[100px] md:h-[50px] justify-center flex items-center border-b lg:px-16 border-black/20 w-[97%] 3xl:w-1/2 fixed z-30 3xl:justify-center backdrop-blur-lg bg-neutral-50/80'>
          <div className='flex w-full items-center justify-between h-full'>
            <Link className='text-black no-underline' href="/">
              <Image src={logo} alt="logo" className='md:h-[20px] lg:h-[40px] w-auto' />
            </Link>
            <div className='flex lg:gap-5 md:gap-3 items-center uppercase font-[500] tracking-tight text-black lg:text-[14px] md:text-[10px]'>
              <a className='font-[200] tracking-wider' href='tel:+19494301028'>(949) 430-1028</a>
              <Link href="about-us" className='md:text-[10px] lg:text-[14px]'>
                About Us
              </Link>
              <Link href="contact-us" className='md:text-[10px] lg:text-[14px]'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        :
        <div>
          {/* FIXME: Add mobile navbar */}
        </div>
      }
    </div>
  )
}

export default Navbar

// ${visible ? 'transform translate-y-0' : '-translate-y-[calc(0.75rem+70px)]'}
// bg-[#429ef5]