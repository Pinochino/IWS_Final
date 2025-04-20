import { Button } from '@/components/ui/button'
import React from 'react'


const PaymentRight = () => {


  return (
    <div className='bg-[#F5F5F5] flex flex-col p-[1.66668vw]'>
    <div className='border-b-2 border-b-[#CBCBCB] space-y-3.5 pb-5'>
            <div className='flex justify-between items-center'>
                <span className='text-xs text-[#010101]'>Subtotal</span>
                <span className='text-[.78125vw] font-black'>280.000 <sup>đ</sup> VND</span>
            </div>
            <div className='flex justify-between items-center'>
                <span className='text-xs text-[#010101]'>Shipping</span>
                <span className='text-[.625vw] font-black'>0 <sup>đ</sup></span>
            </div>
    </div>
    <div className='flex justify-between items-center mt-[1.66667vw]'>
        <h5 className='text-[#010101] leading-[.9375vw] text-[1.25vw] font-normal h-[.9375vw]'>Total(1)</h5>
        <h5 className='text-[.1.5625vw] font-black'>280.000 <sup>đ</sup> VND</h5>
    </div>
    <div className='mt-[1.35417vw]'>
     <div className='flex flex-row'>
        <span className='uppercase text-[.78125vw] text-[#010101] leading-[.78125vw]
        font-medium mr-[.41667vw]
        '>YOUR ORDER </span>
        <p className='uppercase text-[.78125vw] leading-[.78125vw] text-[#010101]'>7 items</p>
     </div>
     <div className='flex mt-1.5'>
        <img 
        className='max-w-[6rem] max-h-[6rem]'
        src='https://prod-eurasian-res.popmart.com/default/20250416_173858_765015____7_____1200x1200.jpg?x-oss-process=image/format,webp' alt='' />
        <div className='flex flex-col'>
            <h5 className='text-[.78125vw] leading-[1.04167vw] text-[#010101] font-medium line-clamp-2 text-ellipsis mb-1.5'>Twinkle Twinkle Be a Little Star Series - Plush Pendant Blind Box</h5>
            <span className='text-[.78125vw] text-[#666] font-normal mb-1.5'>Single Box</span>
            <div className='flex justify-between'>
                <span className='font-bold text-[.78125vw] text-[#010101]'>380.000 <sup>₫</sup></span>
                <span className='text-[.78125vw] font-normal text-[#010101]'>QTY: 7</span>
            </div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default PaymentRight