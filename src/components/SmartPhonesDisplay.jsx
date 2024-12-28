import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const SmartPhonesDisplay = () => {
  return (
    <div className='mx-auto mt-5 w-full bg-white px-[7%] text-sm min-h-[300vh]' >
        <header className='flex flex-row items-center justify-between w-full py-3 border-b border-[#EDEDED] ' >
            <h2>Grab the best deal on <span>  Smartphones</span></h2>
            <h2 className='flex flex-row items-center gap-3'  ><span>See All</span>   <FaChevronRight/> </h2>

        </header>
    </div>
  )
}

export default SmartPhonesDisplay