'use client'
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
    <div className={`h-[70px] justify-between flex items-center px-5 bg-[#429ef5] text-white w-[98%] fixed z-20 rounded-md top-3 left-1/2 -translate-x-1/2 duration-300 ${visible ? 'transform translate-y-0' : '-translate-y-[calc(0.75rem+70px)]'}`}>
        <div>
            Logo
        </div>
        <div className='flex gap-3'>
            <button>About Us</button>
            <button>Contact Us</button>
            <button>button3</button>
        </div>
    </div>
  )
}

export default Navbar