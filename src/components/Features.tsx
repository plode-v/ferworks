import React from 'react'
import FeatureComponent from './FeatureComponent'
import { BiCctv } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { LuSettings } from "react-icons/lu";

const Features = () => {
  return (
    <div className='flex w-full md:h-full lg:h-[450px] bg-neutral-200 justify-center text-white pb-20 rounded-b-xl'>
        <div className='md:w-full 2xl:w-2/3 lg:w-[85%] h-full justify-evenly items-center flex duration-300'>
            <FeatureComponent text="Secure the security cameras installation process" Children={<BiCctv className="fill-black/80 w-auto lg:h-[120px] md:h-[80px] lg:mt-10" />} />
            <FeatureComponent text="Your trusted source for quality tech services" Children={ <MdOutlineSecurity className="fill-black/80 w-auto lg:h-[110px] md:h-[70px] lg:mt-10" /> } />
            <FeatureComponent text="Discover our professional computer repair solutions and services" Children={ <LuSettings className="text-black/80 lg:h-[120px] md:h-[80px] w-auto lg:mt-10" /> } />
        </div>
    </div>
  )
}

export default Features