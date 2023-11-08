'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

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

  const handleClick = () => {
    console.log(process.env.NEXT_PUBLIC_PHONE_NUM)
  }

  return (
    <div className={`h-[70px] justify-between flex items-center px-5 bg-[#429ef5] text-white w-[98%] 3xl:w-2/3 fixed z-20 rounded-md top-3 left-1/2 -translate-x-1/2 duration-300 ${visible ? 'transform translate-y-0' : '-translate-y-[calc(0.75rem+70px)]'}`}>
        <div>
        <Link className='text-white no-underline' href="/">
          <div>Logo</div>
        </Link>
        </div>
        <div className='flex gap-5 items-center text-[18px]'>
          <button className='bg-red-300' onClick={handleClick}><a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}><p>Call Us Now</p></a></button>
          {/* <p className='pr-10'>Call Us: 949-999-9999</p> */}
          <Link className='text-white' href="about-us"><button>About Us</button></Link>
            <button>Contact Us</button>
            <button>button3</button>
        </div>
    </div>
  )
}

export default Navbar