import React from 'react'
import FeatureComponent from './FeatureComponent'
import { BiCctv } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { LuSettings } from "react-icons/lu";

const Features = () => {
  return (
    <div className='flex w-full md:h-[350px] lg:h-[450px] justify-center bg-[#fafafa] text-white'>
        <div className='md:w-full lg:w-2/3 3xl:w-1/3 h-full justify-evenly items-center flex duration-300'>
            <FeatureComponent text="Secure the security cameras installation process" Children={<BiCctv className="fill-black/80 w-auto h-[120px] mt-10" />} />
            <FeatureComponent text="Your trusted source for quality tech services" Children={ <MdOutlineSecurity className="fill-black/80 w-auto h-[110px] mt-10" /> } />
            <FeatureComponent text="Discover our professional computer repair solutions and services" Children={ <LuSettings className="text-black/80 h-[120px] w-auto mt-10" /> } />
        </div>
    </div>
  )
}

export default Features