'use client'
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react'
import logo from "../../public/ferworks-logo.png";
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, Variants } from "framer-motion";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuTabs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: '/about-us'
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "(949) 430-1028",
      link: 'tel:+19494301028'
    }
  ]

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

  const container = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1
      }
    }
  }

  const item = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className='w-full flex items-top justify-center h-full relative'>
      {/* Desktop View */}
      <motion.div 
        className='hidden lg:h-[100px] h-[50px] justify-center md:flex items-center border-b lg:px-16 border-black/20 w-[97%] 3xl:w-1/2 fixed z-30 3xl:justify-center backdrop-blur-lg bg-neutral-50/80'
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div
          className='flex w-full items-center justify-between h-full'
          variants={item}
        >
          <Link className='text-black no-underline' href="/">
            <Image src={logo} alt="logo" className='md:h-[20px] lg:h-[40px] w-auto' />
          </Link>
          <motion.div 
            className='flex lg:gap-5 md:gap-3 items-center uppercase font-[500] tracking-tight text-black lg:text-[14px] md:text-[10px]'
            variants={item}
          >
            <motion.a className='font-[200] tracking-wider' href='tel:+19494301028' variants={item}>(949) 430-1028</motion.a>
            <Link href="about-us" className='md:text-[10px] lg:text-[14px]'>
              <motion.p variants={item}>About Us</motion.p>
            </Link>
            <Link href="contact-us" className='md:text-[10px] lg:text-[14px]'>
              <motion.p variants={item}>Contact Us</motion.p>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>


      {/* Mobile view */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className='md:hidden flex w-full h-[80px] border-b border-black/20 items-center justify-between z-20 backdrop-blur-lg bg-neutral-50/80 px-2 fixed'
      >
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={toggleMenu}
          className='h-max w-max border border-black/50 p-[6px] rounded-md z-30 text-[28px]'
        >
          <GiHamburgerMenu className='text-black' />
        </motion.button>
        <motion.div
          className='bg-neutral-50 fixed top-[80px] left-[0px] w-full h-[calc(100vh-80px)] z-50 flex flex-col' 
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
              clipPath: "inset(0% 100% 100% 10% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7
              }
            }
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.ul className="flex-col flex gap-0">
            {menuTabs.map((tab, idx) => (
              <motion.li 
                key={idx}
                className='bg-gray-300/50 active:bg-blue-400 h-full w-full last-of-type:rounded-b-lg'
                variants={itemVariants}
              >
                <a href={tab.link} className='w-full flex item-center justify-center py-5'>{tab.name}</a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={itemVariants} className='h-full' onClick={toggleMenu} />
          {/* <motion.div className='absolute bottom-24 left-1/2' style={{translateX: '-50%'}} variants={itemVariants} onClick={toggleMenu}>
            <button className='text-[28px] h-[50px] aspect-square rounded-xl font-bold bg-blue-400 text-white'>X</button>
          </motion.div> */}
        </motion.div>
        <Link className='' href='/'>
          <Image src={logo} alt="logo" className='h-[40px] w-auto' />
        </Link>
        <a href="tel:+19494301028" className='text-[32px] text-blue-600 active:text-blue-700'>
          <BiSolidPhoneCall />
        </a>
      </motion.div>
    </div>
  )
}

export default Navbar

// ${visible ? 'transform translate-y-0' : '-translate-y-[calc(0.75rem+70px)]'}
// bg-[#429ef5]