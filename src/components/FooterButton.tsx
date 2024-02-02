import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

interface Props {
    text: string;
    link: string;
}

const FooterButton = ( {text, link}: Props ) => {
  return (
    <button className='text-white/80 font-[300] italic capitalize text-[20px] hover:text-white duration-200 hover:duration-200 flex items-center gap-2'>
        { text }
        <FaArrowRight className="text-[14px]" />
    </button>
  )
}

export default FooterButton