import ListProduct from '@/components/common/list-product/ListProduct'
import SideCollection from '@/components/common/side-collection/SideCollection'
import React from 'react'

const CollectionPage = () => {
  return (
    <div className="flex bg-green-500 justify-center items-center flex-col">
        <h2 className='uppercase text-[2rem] font-bold mt-[1.45833vw] mb-[2.5vw]'>Top sellings</h2>
      <div className="w-[94%] flex justify-between">
        <SideCollection />
        <ListProduct />
        </div>
        </div>
  )
}

export default CollectionPage