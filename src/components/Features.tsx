import React from 'react'
import FeatureComponent from './FeatureComponent'

const Features = () => {
  return (
    <div className='flex w-full h-[350px] justify-center'>
        <div className='w-[50%] h-full justify-evenly items-center flex'>
            <FeatureComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            <div className='flex flex-col items-center w-[30%] p-5 text-center justify-center'>
                <div className='border-black border rounded-full h-[80px] w-[80px]' />
                <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='flex flex-col items-center w-[30%] p-5 text-center justify-center'>
                <div className='border-black border rounded-full h-[80px] w-[80px]' />
                <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
    </div>
  )
}

export default Features