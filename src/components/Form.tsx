import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {

    const formData = [
        {
            name: ["Name", "Email", "Message"],
            Label: ["Name", "Email", "Message"],
            type: ["text", "email", "text"]
        }
    ]
    
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (event: any) => {
      event.preventDefault();
  
  
      // FIXME: configure ID and API keys
      emailjs.sendForm("YOUR SERVICE ID", "YOUR TEMPLATE ID", form.current!, "YOUR PUBLIC KEY")
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        })
    }

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col 2xl:gap-10 lg:gap-5 md:gap-4 w-full'>
        <div className='grid space-y-2'>
            <label className='text-xs text-neutral-400'>Name</label>
            <input type="text" name='name' className='border-b focus:outline-none 2xl:h-8 font-[300] text-neutral-700' />
        </div>
        <div className='grid space-y-2'>
            <label className='text-xs text-neutral-400'>Email</label>
            <input type="email" name='email' className='border-b focus:outline-none 2xl:h-8 font-[300] text-neutral-700' />
        </div>
        <div className='grid space-y-2'>
            <label className='text-xs text-neutral-400'>Message:</label>
            <textarea name="message" className='border focus:outline-none font-[300] p-2 leading-snug text-neutral-700' rows={5} />
        </div>
        <button type='submit' className='bg-blue-500 text-white rounded-full w-[135px] h-[45px]'>Send</button>
    </form>
  )
}

export default Form