import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full'>
      <div className='relative h-1/2 w-full bg-neutral-200 overflow-hidden'>
        <div className='bg-gradient-to-tl from-[#429EF5] to-green-500 absolute -left-60 -bottom-96 w-[700px] h-[700px] rounded-full blur-3xl animate-spin-slow'></div>
        <div className='bg-gradient-to-tr from-purple-500 to-orange-500 absolute -right-60 -top-96 w-[700px] h-[700px] rounded-full blur-3xl animate-spin-slow'></div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[60px] uppercase font-[200]'>contact us</h1>
      </div>
      <div className='h-screen'>
        contact
      </div>
    </div>
  )
}

export default page