import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Responsive from './ElectronicBrandSlider'

const ElectronicBrands = () => {
  return (
      <div className='mx-auto  w-full my-[5%] px-[7%] text-base lg:text-base min-h-[20vh]' >
                <header className='flex flex-row items-center justify-between w-full py-3 border-b border-[#EDEDED] relative' >
                    <h2>Top <span  className='text-[#008ECC] font-bold ' >Electronics Brands</span></h2>
                    <h2 className={`flex flex-row items-center gap-3 cursor-pointer `}   ><span>See All</span>   <FaChevronRight  className='text-[#008ECC]'/> </h2>
                  
                  <hr className='absolute bottom-0 left-0 w-1/4 bg-[#008ECC] h-[3px]'  />
                </header>

                <Responsive/>
                </div>
  )
}

export default ElectronicBrands