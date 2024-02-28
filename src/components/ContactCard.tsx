import React from 'react'

const ContactCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='2xl:h-[350px] lg:h-[300px] md:h-[250px] h-[150px] 3xl:w-[20vw] lg:w-[40vw] md:w-[50vw] w-[65vw] shadow-lg md:shadow-2xl -translate-y-6 md:-translate-y-8 flex bg-white rounded-lg'>
        {children}
    </div>
  )
}

export default ContactCard