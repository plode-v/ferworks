import React from 'react'

const FeatureComponent = ({text}: {text: string}) => {
  return (
    <div className='flex flex-col w-[300px] h-[350px] items-center justify-center bg-white hover:scale-[102%] duration-150 rounded-xl'>
        <div className='border border-black rounded-full h-[100px] w-[100px] mb-5' />
        <p className='mx-5 text-center text-black'>{text}</p>
    </div>
  )
}

export default FeatureComponent