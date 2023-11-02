import React from 'react'
import FeatureComponent from './FeatureComponent'

const Features = () => {
  return (
    <div className='flex w-full h-[350px] justify-center bg-[#429ef5] text-white'>
        <div className='w-1/2 3xl:w-1/3 h-full justify-evenly items-center flex duration-300'>
            <FeatureComponent text="Simple text for feature #1" />
            <FeatureComponent text="Simple text for feature #2" />
            <FeatureComponent text="Simple text for feature #3" />
        </div>
    </div>
  )
}

export default Features