'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { Button } from './ui/button';

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
    <div className={`h-[70px] justify-between flex items-center px-5 bg-[#429EF5] bg-opacity-30 backdrop-blur-md w-full fixed z-20 3xl:justify-center`}>
      <div className='flex w-full items-center justify-between 3xl:w-2/3'>
        <Link className='text-white no-underline' href="/">
          <div>Logo</div>
        </Link>
        <div className='flex gap-5 items-center text-[18px]'>
          <Link className='' href="about-us"><Button className='bg-[#fafafa] text-black hover:text-white' variant='navbar'>About Us</Button></Link>
          <Link className='' href="contact-us"><Button className='bg-[#fafafa] text-black hover:text-white' variant='navbar'>Contact Us</Button></Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar

// ${visible ? 'transform translate-y-0' : '-translate-y-[calc(0.75rem+70px)]'}
// bg-[#429ef5]