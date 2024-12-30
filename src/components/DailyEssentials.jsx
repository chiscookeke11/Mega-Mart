import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { dailyEssentials } from '../assets/assets'

const DailyEssentials = () => {
  return (
 <div className='mx-auto  w-full my-[5%] px-[7%] text-sm lg:text-base min-h-[20vh] py-3' >
            <header className='flex flex-row items-center justify-between w-full py-3 border-b border-[#EDEDED] relative' >
                <h2>Daily <span  className='text-[#008ECC] font-bold ' >Essentials</span></h2>
                <h2 className={`flex flex-row items-center gap-3 cursor-pointer `}   ><span>See All</span>   <FaChevronRight  className='text-[#008ECC]'/> </h2>
              
              <hr className='absolute bottom-0 left-0 w-1/6 bg-[#008ECC] h-[3px]'  />
            </header>



            <div className="display w-full grid grid-cols-2 lg:grid-cols-6 md:grid-cols-auto  gap-1 gap-y-6 py-5 px-0 mx-3  ">


              {dailyEssentials.map((item, id) => 
              (
                <div key={id} className='cursor-pointer group lg:w-[130px] lg:h-[160px] md:w-[160px] h-[220px] w-[140px] min-w-[130px] min-h-[200px] mx-1 bg-white rounded-[14px] flex flex-col gap-1 items-center justify-start ' >

                  <div className="group-hover:border-[#008ECC] border transition duration-300 ease-in-out  image shadow-lg bg-[#F5F5F5] w-full h-[70%] rounded-t-[14px] flex items-center justify-center mb-3 ">
                    <img src={item.image} alt="" className='w-[60%] h-[60%] object-contain '  />
                  </div>

                  <h3 className=' text-xs  text-[#666666] font-normal ' >{item.name}</h3>
                  <h1 className='text-[#000000] font-bold text-md ' >UP TO {item.percentageDiscount}% OFF</h1>
                </div>
              )
              )}

            </div>









            </div>
  )
}

export default DailyEssentials