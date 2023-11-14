import React from 'react'

const ContactCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[400px] w-[350px] shadow-2xl -translate-y-6 flex bg-white'>
        {children}
    </div>
  )
}

export default ContactCard