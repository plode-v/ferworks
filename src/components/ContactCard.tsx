import React from 'react'

const ContactCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='2xl:h-[400px] lg:h-[300px] md:h-[250px] 2xl:w-[350px] lg:w-[250px] md:w-[200px] shadow-2xl -translate-y-8 flex bg-white rounded-lg'>
        {children}
    </div>
  )
}

export default ContactCard