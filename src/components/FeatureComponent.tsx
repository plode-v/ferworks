import React from 'react'

const FeatureComponent = ({text}: {text: string}) => {
  return (
    <div className='flex flex-col md:w-[200px] lg:w-[300px] md:h-[250px] lg:h-[350px] items-center justify-center bg-white hover:scale-[102%] duration-150 rounded-xl'>
      <div className='flex flex-col h-[100%]'>
        <div className='h-2/3 w-full items-center justify-center flex'>
          <div className='border border-black rounded-full md:h-[50px] lg:h-[100px] lg:w-[100px] mb-5 flex' />
        </div>
        <div className='h-1/3'>
          <p className='md:mx-2 lg:mx-5 text-center md:text-sm lg:text-[16px] text-black flex'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureComponent