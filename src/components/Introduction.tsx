import React from 'react'

const Introduction = () => {
  return (
    <div className='w-full lg:h-[500px] md:h-[350px] bg-[#fafafa] flex items-center justify-center'>
        <div className='h-full w-full 3xl:w-1/2 pb-10 duration-300 flex flex-col rounded-lg text-[#1a1a1a] items-start'>
            <h1 className='font-[700] opacity-30 uppercase lg:text-[70px] md:text-[40px] md:px-10 lg:px-20 md:py-5 lg:py-10'>Who we are...</h1>
            <p className='lg:text-[20px] md:text-[16px] md:px-10 lg:px-20 md:py-0 lg:py-5 lg:leading-loose md:leading-relaxed'>
            {/* FIXME: CHANGE INTRODUCTION LATER */}
            Welcome to our business, where we specialize in providing top-notch security camera installation services to keep your property safe and secure. In addition to that, we also offer expert computer and cell phone repair services to ensure that your devices are always in good working condition. Our skilled technicians are trained to handle a variety of devices and provide prompt and reliable service. Trust us to take care of all your security and device repair needs.
            </p>
        </div> 
    </div>
  )
}

export default Introduction