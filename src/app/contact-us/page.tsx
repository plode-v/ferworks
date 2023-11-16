'use client'
import React, { ChangeEvent, FormEvent, FormEventHandler, LegacyRef, useRef, useState } from 'react'
import Header from '@/components/Header'
import ContactCard from '@/components/ContactCard'
import emailjs from "@emailjs/browser";

const ContactUs = () => {

  const form = useRef();

  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs.sendForm("YOUR SERVICE ID", "YOUR TEMPLATE ID", form.current!, "YOUR PUBLIC KEY")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
  }

  return (
    <div className='h-screen w-full bg-white'>
      <Header header='contact us' />
      <div className='items-center justify-center flex flex-col'>
        <div className='h-max flex justify-center 2xl:gap-x-16 gap-x-12'>
          <ContactCard>
            <div>

            </div>
          </ContactCard>
          <ContactCard>
            <div>

            </div>
          </ContactCard>
          <ContactCard>
            <div>

            </div>
          </ContactCard>
        </div>
        <section className='2xl:h-[800px] h-[600px] w-full items-center flex justify-center 3xl:w-2/3'>
          <div className='flex border h-[85%] w-4/5 items-center justify-center'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
              <div className='grid'>
                <label>Name:</label>
                <input type="text" name='name' className='border' />
              </div>
              <div className='grid'>
                <label>Email:</label>
                <input type="email" name='email' className='border' />
              </div>
              <div className='grid'>
                <label>Message:</label>
                <textarea name="message" className='border' />
              </div>
              <button type='submit' className='bg-blue-500 text-white rounded-sm'>Send</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactUs