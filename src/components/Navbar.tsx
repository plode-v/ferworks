import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[70px] justify-between flex items-center px-5 bg-blue-500 text-white w-[98%] -translate-x-1/2 left-1/2 top-3 fixed z-20 rounded-md'>
        <div>
            Logo
        </div>
        <div className='flex gap-3'>
            <button>About Us</button>
            <button>Contact Us</button>
            <button>button3</button>
        </div>
    </div>
  )
}

export default Navbar