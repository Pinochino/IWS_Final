import NewArrivals, { arrivalImages } from '@/components/common/arrivals/NewArrivals'
import BannerProduct from '@/components/common/ProductDetailModes/BannerProduct'
import CustomBreadcum from '@/components/common/ProductDetailModes/CustomBreadcum'
import ProductInformation from '@/components/common/ProductDetailModes/ProductInformation'
import SlideDetail from '@/components/common/ProductDetailModes/SlideDetail'
import React from 'react'

const ProductDetailPage = () => {
  return (
    <div className='bg-green-400 flex justify-center'>
        <div className='bg-purple-400 w-[63.5%]'>
            <CustomBreadcum />
            <div className='flex justify-between flex-nowrap gap-10 mb-20'>
               <div className=' bg-amber-800 flex-[0.6]'> <SlideDetail /></div>
               <div className=' bg-amber-500 flex-[0.4]'> <ProductInformation /></div>
            </div>
            <BannerProduct />
            <NewArrivals title={'you may also like'} images={arrivalImages}/>
            </div>
    </div>
  )
}

export default ProductDetailPage