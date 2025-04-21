import React from 'react'
import FooterHeader from './FooterHeader'
import FooterBody from './FooterBody'

const Footer = () => {
  return (
    <div className='bg-red-500 sm:w-[68.5rem] lg:w-full md:w-[125rem] w-[68.5rem]'>
      <FooterHeader />
      <FooterBody />
    </div>
  )
}

export default Footer