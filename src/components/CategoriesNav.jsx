import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'


export const CategoriesNav = ({showCategories, setShowCategories}) => {



  return (

    <>      
          {/* categories open */}
<div
  className={`border-[#EDEDED] border-b w-full px-[5%] py-4 bg-red-800 transition duration-300 transform  z-0  ${
    showCategories ? "bg-blue-700 translate-y-[0]" :  "bg-black translate-y-[-100%] z-0"
  } relative`}
>
  <div
    className={`flex flex-col lg:flex-row gap-3 items-center justify-evenly text-sm text-[#222222]`}
  >
    <div className="flex items-center gap-2 bg-[#F3F9FB] py-1 px-3 rounded-[8px] my-2 cursor-pointer whitespace-nowrap">
      Groceries <FaChevronDown className="text-[#008ECC]" />
    </div>
    <div className="flex items-center gap-2 bg-[#F3F9FB] py-1 px-3 rounded-[8px] my-2 cursor-pointer whitespace-nowrap">
      Premium Fruits <FaChevronDown className="text-[#008ECC]" />
    </div>
    <div className="flex items-center gap-2 bg-[#F3F9FB] py-1 px-3 rounded-[8px] my-2 cursor-pointer whitespace-nowrap">
      Home & Kitchen <FaChevronDown className="text-[#008ECC]" />
    </div>
    <div className="flex items-center gap-2 bg-[#F3F9FB] py-1 px-3 rounded-[8px] my-2 cursor-pointer whitespace-nowrap">
      Fashion <FaChevronDown className="text-[#008ECC]" />
    </div>
    <div className="flex items-center gap-2 bg-[#F3F9FB] py-1 px-3 rounded-[8px] my-2 cursor-pointer whitespace-nowrap">
      Electronics <FaChevronDown className="text-[#008ECC]" />
    </div>
    <div className="flex items-center gap-2 bg-[#F3F9FB] py-1 px-3 rounded-[8px] my-2 cursor-pointer whitespace-nowrap">
      Beauty <FaChevronDown className="text-[#008ECC]" />
    </div>
    <div className="flex items-center gap-2 bg-[#F3F9FB] py-1 px-3 rounded-[8px] my-2 cursor-pointer whitespace-nowrap">
      Home Improvement <FaChevronDown className="text-[#008ECC]" />
    </div>
    <div className="flex items-center gap-2 bg-[#F3F9FB] py-1 px-3 rounded-[8px] my-2 cursor-pointer whitespace-nowrap">
      Sports, Toys & Luggage <FaChevronDown className="text-[#008ECC]" />
    </div>
  </div>
</div>



{/* categories close */}
</>
  )
}
