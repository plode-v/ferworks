import React from 'react'
import FeatureComponent from './FeatureComponent'

const Features = () => {
  return (
    <div className='flex w-full md:h-[350px] lg:h-[450px] justify-center bg-[#fafafa] text-white'>
        <div className='md:w-full lg:w-2/3 3xl:w-1/3 h-full justify-evenly items-center flex duration-300'>
            <FeatureComponent text="Secure the security cameras installation process" />
            <FeatureComponent text="Your trusted source for quality tech services" />
            <FeatureComponent text="Discover our professional computer repair solutions and services" />
        </div>
    </div>
  )
}

export default Features