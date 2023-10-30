'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '/public/img-1.jpg'
import image2 from '/public/img-2.jpg'
import image3 from '/public/img-3.jpg'

const GallerySection = () => {

  return (
    <div className='w-full h-[700px] bg-neutral-50'>
        {/* <div className='flex items-center justify-center h-full'>
          <Carousel
            autoplay={true}
            wrapAround={true}
            cellAlign='left'
            style={{ width: '80vw', height: "700px"}}
            enableKeyboardControls={true}
            dragging={false}
            >
              <div className='h-[700px] w-full'>
                <Image src="/public/img-1.jpg" alt="img-1" width={100} height={700}/>
              </div>
              <Image src="/public/img-2.jpg" alt='img-2' width={500} height={700} />
            <div className="w-full h-full bg-purple-500">3</div>
          </Carousel>
        </div> */}

      <Carousel
       className='flex items-center justify-center w-full' 
      >
        <Carousel.Item>
          <Image src={image1} alt='image-1' width={1200} height={700} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={image2} alt='image-2' width={500} height={700} />
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default GallerySection