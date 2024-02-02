'use client'
import React from 'react'
import Header from '@/components/Header'
import ContactCard from '@/components/ContactCard'
import Form from '@/components/Form';

const ContactUs = () => {

  return (
    <div className='h-full w-full bg-neutral-50 flex items-center justify-center'>
      <div className='h-full w-[97%]'>
        <Header header='contact us' />
        <div className='items-center justify-center flex flex-col'>
          <div className='h-max flex justify-center 2xl:gap-x-16 lg:gap-x-12 md:gap-x-8'>
            {/* FIXME: MAYBE CREATE A TEMPLATE/COMPONENTS FOR EASIER READABILITY */}
            <ContactCard>
              <div>
                address
              </div>
            </ContactCard>
            <ContactCard>
              <div>
                phone number
              </div>
            </ContactCard>
            <ContactCard>
              <div>
                emails
              </div>
            </ContactCard>
          </div>
          <section className='2xl:h-[800px] lg:h-[600px] md:h-[550px] w-full flex justify-center items-center 3xl:w-2/3'>
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