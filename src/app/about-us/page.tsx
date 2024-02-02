import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen bg-neutral-50 w-full flex items-center justify-center'>
      <div className='h-full w-[97%]'>
        <Header header='about us' />
        <div className='h-4/5 w-full flex items-center justify-center'>
          <div className='h-3/4 lg:w-1/2 3xl:w-1/3 text-justify'>
            Welcome to our business, where we specialize in providing top-notch security camera installation services to keep your property safe and secure. In addition to that, we also offer expert computer and cell phone repair services to ensure that your devices are always in good working condition. Our skilled technicians are trained to handle a variety of devices and provide prompt and reliable service. Trust us to take care of all your security and device repair needs.
          </div>
        </div>
      </div>
    </div>
  )
}

export default page