import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

interface Props {
    text: string;
    link: string;
}

const FooterButton = ( {text, link}: Props ) => {
  return (
    <button className='text-white/80 font-[300] italic capitalize 2xl:text-[21px] lg:text-[16px] md:text-[14px] text-[10px] hover:text-white duration-200 hover:duration-200'>
      <a href={link} className='flex items-center md:gap-2 gap-1'>
        { text }
        <FaArrowRight className="2xl:text-[14px] lg:text-[12px] text-[10px]" />
      </a>
    </button>
  )
}

export default FooterButton