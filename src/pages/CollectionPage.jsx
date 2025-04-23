import ListProduct from '@/components/common/list-product/ListProduct'
import CustomBreadcum from '@/components/common/ProductDetailModes/CustomBreadcum'
import SideCollection from '@/components/common/side-collection/SideCollection'
import React from 'react'
import {useParams} from 'react-router-dom';

const CollectionPage = () => {
  const {heading} = useParams();
  return (
   <div>
        <div className='flex ml-15'><CustomBreadcum name={heading}/></div>
      <div className="flex  justify-center items-center flex-col flex-wrap lg:w-auto w-[400%]">
          <h2 className='uppercase text-[2rem] font-bold mt-[1.45833vw] mb-[2.5vw]'>{heading}</h2>
        <div className="w-[94%] lg:flex justify-between block">
          <SideCollection />
          <ListProduct />
          </div>
          </div>
   </div>
  )
}

export default CollectionPage