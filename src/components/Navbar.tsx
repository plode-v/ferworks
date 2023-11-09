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

  return (
    <div className={`h-[70px] justify-between flex items-center px-5 bg-blue-500 bg-opacity-20 backdrop-blur-md w-full fixed z-20`}>
        <div>
        <Link className='text-white no-underline' href="/">
          <div>Logo</div>
        </Link>
        </div>
        <div className='flex gap-5 items-center text-[18px]'>
          <Link className='' href="about-us"><button>About Us</button></Link>
          <Link className='' href="contact-us"><button>Contact Us</button></Link>
            <button>button3</button>
        </div>
    </div>
  )
}

export default Navbar

// ${visible ? 'transform translate-y-0' : '-translate-y-[calc(0.75rem+70px)]'}
// bg-[#429ef5]