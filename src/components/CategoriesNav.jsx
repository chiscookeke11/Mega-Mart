import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'


export const CategoriesNav = ({ showCategories, setShowCategories }) => { 


const [displayDropDown, setDisplayDropDown] = React.useState(true)
const handleDropDown = () => {
  setDisplayDropDown(prevDropDown => !prevDropDown)
}

return (

  <>
    {/* categories open */}
    <div
      className={`border-[#EDEDED] border-b w-[100vw] px-[3%] flex flex-row gap-3 items-center justify-evenly  transition-all duration-300 transform overflow-y-hidden overflow-x-auto  z-0  ${showCategories ? "max-h-[200px] py-3" : "h-0 z-0 py-0"
        } relative`}
    >


      <div onClick={handleDropDown} className="flex items-center gap-2 bg-[#F3F9FB] py-1 px-3 rounded-[8px]  my-2 cursor-pointer whitespace-nowrap">
        Groceries <FaChevronDown  className={`text-[#008ECC] transition-all duration-300 transform ${displayDropDown? "rotate-[-180deg] ": "rotate-0" }`} />
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




    {/* categories close */}
  </>
)
}
