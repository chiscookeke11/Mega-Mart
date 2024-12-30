import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { topCategories } from '../assets/assets'

const TopCatgories = () => {
  return (
    <div className='mx-auto  w-full my-[5%] bg-white px-[7%] text-base lg:text-base min-h-[20vh]' >
            <header className='flex flex-row items-center justify-between w-full py-3 border-b border-[#EDEDED] relative' >
                <h2>Shop From <span  className='text-[#008ECC] font-bold ' >Top Categories</span></h2>
                <h2 className={`flex flex-row items-center gap-3 cursor-pointer `}   ><span>See All</span>   <FaChevronRight  className='text-[#008ECC]'/> </h2>
              
              <hr className='absolute bottom-0 left-0 w-1/4 bg-[#008ECC] h-[3px]'  />
            </header>
            

            <div className="display my-7 flex flex-row items-center justify-evenly overflow-x-auto">

               {topCategories.map((category, index)=> (
                 <div key={index} className='group cursor-pointer bg-transparent w-[135px] flex items-center justify-center flex-col p-2 gap-1 mx-1 my-2 ' >
                 <div className='group-hover:border-[#008ECC]  border transition duration-300 ease-in-out w-[110px] h-[110px] rounded-[50%] bg-[#F5F5F5] flex items-center justify-center' > 
                     <img src={category.image}  className=" object-contain w-[70px] h-[70%] " alt={category.name}  />
                 </div>
                 <h2 className='text-[#222222] text-sm ' >{category.name}</h2>
             </div>
               ))}
                
                
            </div>
    </div>
  )
}

export default TopCatgories