import React from 'react'

const HeroBanner = () => {
  return (
    <div className='h-[calc(600px+(0.75rem+70px))] relative bg-neutral-100 flex flex-col items-center'>
        <div className='flex flex-col justify-center h-full pl-[7%] w-full 3xl:w-2/3 duration-300'>
            <div className='w-max'>
                <h1 className='text-[64px] font-[600]'>Ferworks Security</h1>
                <p>Lorem ipsum</p>
            </div>
            <div className='w-max'>
              <button className='bg-[#429ef5] text-white p-3 rounded-lg'>Book an Appointment</button>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner