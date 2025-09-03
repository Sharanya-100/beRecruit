import Image from 'next/image'
import React from 'react'

function InterviewHeader() {
  return (
    <div className='p-4 shadow-sm'>
        <Image src={'/icon.png'} alt="icon" width={200} height={100}  className='w-[180px]'/>
    </div>
  )
}

export default InterviewHeader