import React from 'react'

const ContactCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='2xl:h-[400px] h-[300px] 2xl:w-[350px] w-[250px] shadow-2xl -translate-y-8 flex bg-white rounded-lg'>
        {children}
    </div>
  )
}

export default ContactCard