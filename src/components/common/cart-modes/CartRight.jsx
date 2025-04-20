import { Button } from '@/components/ui/button'
import React from 'react'
import {Link} from 'react-router-dom';


const CartRight = () => {


  return (
    <div className='bg-[#F5F5F5] flex flex-col p-[1.66668vw]'>
    <div className='border-b-2 border-b-[#CBCBCB] space-y-3.5 pb-5'>
            <div className='flex justify-between items-center'>
                <span className='text-xs text-[#010101]'>Subtotal</span>
                <span className='text-[.78125vw] font-black'>280.000 <sup>đ</sup> VND</span>
            </div>
            <div className='flex justify-between items-center'>
                <span className='text-xs text-[#010101]'>Shipping</span>
                <span className='text-[.625vw] font-black'>Calculated at next step</span>
            </div>
    </div>
    <div className='flex justify-between items-center mt-[1.66667vw]'>
        <h5 className='text-[#010101] leading-[.9375vw] text-[1.25vw] font-normal h-[.9375vw]'>Total(1)</h5>
        <h5 className='text-[.1.5625vw] font-black'>280.000 <sup>đ</sup> VND</h5>
    </div>
    <div className='mt-[1.35417vw]'>
        <Link to={'/payment'}><Button className={'uppercase w-full'} variant={'destructive'}>Check out</Button></Link>
    </div>
    </div>
  )
}

export default CartRight