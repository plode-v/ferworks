import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from './ui/card'


const ReviewComponent = () => {
  return (
    <>
        <Card className='flex flex-col items-center w-1/3 rounded-[20px]'>
          <CardHeader className='flex flex-col items-center'>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
    </>
  )
}

export default ReviewComponent