import React from 'react'
import FeatureComponent from './FeatureComponent'

const Features = () => {
  return (
    <div className='flex w-full h-[350px] justify-center'>
        <div className='w-[50%] h-full justify-evenly items-center flex'>
            <FeatureComponent text="Simple text for feature #1" />
            <FeatureComponent text="Simple text for feature #2" />
            <FeatureComponent text="Simple text for feature #3" />
        </div>
    </div>
  )
}

export default Features