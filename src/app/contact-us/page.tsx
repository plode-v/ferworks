import React from 'react'
import Header from '@/components/Header'
import ContactCard from '@/components/ContactCard'

const page = () => {
  return (
    <div className='h-screen w-full bg-white'>
      <Header header='contact us' />
      <div className='items-center justify-center flex flex-col'>
        <div className='h-max flex justify-center gap-x-12'>
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
        <section className='h-[800px] w-full items-center flex justify-center 3xl:w-2/3'>
          <div className='flex border h-[85%] w-4/5 items-center justify-center'>
            contact form
          </div>
        </section>
      </div>
    </div>
  )
}

export default page