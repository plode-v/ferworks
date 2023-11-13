import React from 'react'

const Header = ({ text }: { text: string }) => {
  return (
    <div className='relative h-[500px] w-full bg-neutral-200 overflow-hidden flex'>
        <div className='relative h-full w-1/2 flex blur-3xl'>
          <div className='bg-gradient-to-r from-sky-400 to-blue-600 h-[600px] aspect-square absolute -bottom-[350px] -left-[200px] rounded-full animate-spin-slow' />
        </div>
        <div className='relative h-full w-1/2 flex blur-3xl'>
          <div className='bg-gradient-to-r from-sky-500 to-purple-300 h-[600px] aspect-square absolute -top-[350px] -right-[200px] rounded-full animate-spin-slow' />
        </div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[60px] uppercase font-[200]'>{text}</h1>
      </div>
  )
}

export default Header