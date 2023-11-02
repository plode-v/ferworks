import React from 'react'

const FeatureComponent = ({text}: {text: string}) => {
  return (
    <div className='flex flex-col items-center w-[30%] p-5 text-center justify-center'>
        <div className='border border-white rounded-full h-[80px] w-[80px]' />
        <p className='py-5'>{text}</p>
    </div>
  )
}

export default FeatureComponent