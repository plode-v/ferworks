import React from 'react'

const HeroBanner = () => {
  return (
    <div className='h-[calc(600px+(0.75rem+70px))] relative bg-neutral-100'>
        <div className='flex flex-col justify-center h-full ml-[7%]'>
            <div className=''>
                <h1 className='text-[64px] font-[600]'>Ferworks Security</h1>
                <p>Lorem ipsum</p>
            </div>
            <div className=''>
                <button className='bg-purple-500 text-white p-3 rounded-lg'>Book an Appointment</button>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner