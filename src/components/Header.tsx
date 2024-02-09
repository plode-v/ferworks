import React from 'react'

const Header = ({ header }: { header: string }) => {
  return (
    <div className='3xl:h-[550px] 2xl:h-[450px] lg:h-[350px] md:h-[250px] lg:mt-[100px] md:mt-[50px] relative h-full w-full 3xl:w-1/2 bg-neutral-100 overflow-hidden flex duration-200 justify-center items-center rounded-b-2xl'>
      <div className='flex items-center justify-center w-full h-full'>
          <div className='relative h-full w-1/2 flex blur-3xl'>
            <div className='bg-gradient-to-r from-sky-400 to-blue-600 2xl:h-[600px] h-[500px] aspect-square absolute -bottom-[350px] -left-[200px] rounded-full animate-spin-slow' />
          </div>
          <div className='relative h-full w-1/2 flex blur-3xl'>
            <div className='bg-gradient-to-r from-sky-500 to-purple-300 2xl:h-[600px] h-[500px] aspect-square absolute -top-[350px] -right-[200px] rounded-full animate-spin-slow' />
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='2xl:text-[60px] lg:text-[45px] md:text-[36px] uppercase 2xl:font-[100] font-[200]'>{header}</h1>
          </div>
        </div>
      </div>
  )
}

export default Header