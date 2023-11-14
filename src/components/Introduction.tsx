import React from 'react'

const Introduction = () => {
  return (
    <div className='w-full lg:h-[600px] md:h-[450px] bg-white flex items-center justify-center'>
        <div className='lg:h-3/4 md:h-[80%] md:w-4/5 lg:w-1/2 3xl:w-1/3 text-center pb-10 duration-300 flex flex-col items-center justify-center rounded-lg bg-blue-100 text-[#1a1a1a]'>
            <h1 className='mb-4 font-[600] capitalize lg:text-[50px] md:text-[24px]'>What we do...</h1>
            <p className='lg:text-[18px] md:text-[16px] px-5 md:leading-relaxed'>
            {/* FIXME: CHANGE INTRODUCTION LATER */}
            Welcome to our business, where we specialize in providing top-notch security camera installation services to keep your property safe and secure. In addition to that, we also offer expert computer and cell phone repair services to ensure that your devices are always in good working condition. Our skilled technicians are trained to handle a variety of devices and provide prompt and reliable service. Trust us to take care of all your security and device repair needs.
            </p>
        </div> 
    </div>
  )
}

export default Introduction