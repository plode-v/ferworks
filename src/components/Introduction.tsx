import React from 'react'
import Features from './Features'

const Introduction = () => {
  return (
    <div className='w-full lg:h-[650px] xl:h-[700px] md:h-[500px] h-[335px] flex-col flex items-center justify-center'>
      <div className='w-full duration-200 3xl:w-1/2 h-full flex items-center flex-col bg-neutral-200 rounded-xl'>
        <div className='h-full md:w-3/4 w-4/5 duration-300 flex flex-col xl:gap-5 md:gap-3 gap-1 rounded-2xl justify-start lg:pt-16 md:pt-8 pt-4'>
          {/* FIXME: change intro */}
          <h1 className='lg:text-[36px] xl:text-[42px] md:text-[24px] text-[18px] font-black text-black/90 xl:w-[60%] 2xl:w-[50%] md:w-[70%] w-full lg:leading-[42px] md:leading-[30px]'>Trusted Surveillance Solutions for Every Need</h1>
          <p className='text-black/80 w-max md:text-[14px] text-[12px]'>Tailored Solutions for Total Protection.</p>
        </div> 
        <Features />
      </div>
    </div>
  )
}

export default Introduction