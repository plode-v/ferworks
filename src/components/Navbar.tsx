'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import logo from "../../public/ferworks-logo.png";
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, Variants } from "framer-motion";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <div className='w-full flex items-top justify-center h-full relative'>
      <div className='hidden lg:h-[100px] h-[50px] justify-center md:flex items-center border-b lg:px-16 border-black/20 w-[97%] 3xl:w-1/2 fixed z-30 3xl:justify-center backdrop-blur-lg bg-neutral-50/80'>
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
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className='md:hidden fixed flex w-[97%] h-[50px] border-b border-black/20 items-center justify-start z-20 backdrop-blur-lg bg-neutral-50/80 px-2'
      >
        <div className='left'>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={toggleMenu}
            className='h-max w-max border border-black/50 p-[6px] rounded-md'
          >
            <GiHamburgerMenu />
          </motion.button>
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                }
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
                }
              }
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <motion.li variants={itemVariants}>Item 1</motion.li>
            <motion.li variants={itemVariants}>Item 2</motion.li>
            <motion.li variants={itemVariants}>Item 3</motion.li>
            <motion.li variants={itemVariants}>Item 4</motion.li>
            <motion.li variants={itemVariants}>Item 5</motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar

// ${visible ? 'transform translate-y-0' : '-translate-y-[calc(0.75rem+70px)]'}
// bg-[#429ef5]