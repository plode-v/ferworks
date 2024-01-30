import React from 'react'
import FeatureComponent from './FeatureComponent'
import { BiSolidCctv } from "react-icons/bi";

const Features = () => {
  return (
    <div className='flex w-full md:h-[350px] lg:h-[450px] justify-center bg-[#fafafa] text-white'>
        <div className='md:w-full lg:w-2/3 3xl:w-1/3 h-full justify-evenly items-center flex duration-300'>
            <FeatureComponent text="Secure the security cameras installation process" Children={<BiSolidCctv className="fill-[#429ef5] w-auto h-[120px] mt-5" />} />
            <FeatureComponent text="Your trusted source for quality tech services" />
            <FeatureComponent text="Discover our professional computer repair solutions and services" />
        </div>
    </div>
  )
}

export default Features