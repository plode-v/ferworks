'use client'
import React from 'react'
import Header from '@/components/Header'
import ContactCard from '@/components/ContactCard'
import Form from '@/components/Form';
import { contactCardInfo } from '@/lib/data';
import { BiSolidPhoneCall } from "react-icons/bi";

const ContactUs = () => {

  return (
    <div className='h-full w-full bg-neutral-50 flex items-center justify-center'>
      <div className='h-full w-[97%] 3xl:w-full flex flex-col items-center justify-center'>
        <Header header='contact us' />
        <div className='items-center justify-center flex flex-col'>
          <div className='flex h-max justify-center pb-5 sm:pb-0'>
            {/* FIXME: MAYBE CREATE A TEMPLATE/COMPONENTS FOR EASIER READABILITY */}
            <ContactCard>
              <div className='flex flex-col justify-center h-full w-full items-center'>
                {contactCardInfo.map((element, index) => (
                  <div
                    key={index}
                    className='flex md:gap-2 gap-1 py-1 md:py-3 2xl:py-4 md:w-5/6 w-[95%] justify-start md:text-lg 2xl:text-xl text-sm'
                  >
                    <h1 className='font-[200] text-neutral-500'>{element.h1}</h1>
                    <p className='font-[500] text-neutral-800'>{element.p}</p>
                  </div>
                ))}
              </div>
            </ContactCard>
          </div>
          <section className='2xl:h-[800px] lg:h-[600px] md:h-[550px] w-[97vw] h-full 3xl:w-[70vw] flex justify-center items-center'>
            <div className='flex h-max 3xl:w-2/3 w-4/5 items-start justify-center lg:gap-20 md:gap-10'>
              <div className='lg:w-2/3 w-full h-3/4 justify-evenly flex flex-col items-start'>
                <h1 className='text-neutral-700 text-2xl capitalize tracking-wide pb-10'>Send us a message</h1>
                <Form />
              </div>
              {/* FIXME: MAYBE MAYBE MAYBE */}
              {/* <div className='w-1/3 h-max flex flex-col justify-center items-start border space-y-5 p-8'>
                <p className='font-[600] tracking-wide'>Media Contact</p>
                <p className='leading-relaxed text-neutral-500'>If you are composing an article or conducting a review of our services, we would be delighted to connect with you and furnish tailored information, images, or any other assets to cater to you requirements.</p>
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ContactUs