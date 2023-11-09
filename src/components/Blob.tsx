import React from 'react'

// interface Props {
//     height: string
//     width: string
//     colorFrom: string
//     colorTo: string
//     gradientDirection: string
// }


const Blob = () => {
  return (
    <div 
        className='rounded-full h-[700px] w-[700px] bg-gradient-to-tr from-orange-500 to-red-500 blur-3xl absolute -left-60 -bottom-96'
    />
  )
}

export default Blob