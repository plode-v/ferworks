import React from 'react'

const Introduction = () => {
  return (
    <div className='w-full h-[600px] bg-white flex items-center justify-center'>
        <div className='h-3/4 w-1/2 3xl:w-1/3 text-center py-10 duration-300 flex flex-col items-center justify-center rounded-lg bg-blue-100 text-[#1a1a1a]'>
            <h1 className=' mb-4 font-[600] capitalize'>What we do...</h1>
            {/* FIXME: CHANGE INTRODUCTION LATER */}
            <p className='text-[18px] px-5'>
            Welcome to our business, where we specialize in providing top-notch security camera installation services to keep your property safe and secure. In addition to that, we also offer expert computer and cell phone repair services to ensure that your devices are always in good working condition. Our skilled technicians are trained to handle a variety of devices and provide prompt and reliable service. Trust us to take care of all your security and device repair needs.
            </p>
        </div> 
    </div>
  )
}

export default Introduction