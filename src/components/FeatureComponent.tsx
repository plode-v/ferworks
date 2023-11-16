import React from 'react'

const FeatureComponent = ({text}: {text: string}) => {
  return (
    <div className='flex flex-col md:w-[200px] lg:w-[300px] md:h-[250px] lg:h-[350px] items-center justify-center bg-white hover:scale-[102%] duration-150 rounded-xl'>
      <div className='flex flex-col h-[100%]'>
        <div className='md:h-1/2 lg:h-1/2 w-full md:items-end items-center justify-center flex'>
          <div className='border border-black rounded-full md:h-[60px] lg:h-[100px] md:w-[60px] lg:w-[100px] mb-5 flex' />
        </div>
        <div className='md:h-1/2 lg:h-1/2 flex justify-center md:items-start lg:items-start lg:pt-10'>
          <p className='md:mx-2 lg:mx-5 text-center md:text-sm lg:text-[16px] text-black flex'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureComponent