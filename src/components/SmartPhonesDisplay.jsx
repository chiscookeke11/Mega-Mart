import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { phones } from '../assets/assets'

const SmartPhonesDisplay = () => {


 

  return (
    <div className='mx-auto mt-5 w-full bg-white px-[7%] text-sm lg:text-md min-h-[20vh]' >
        <header className='flex flex-row items-center justify-between w-full py-3 border-b border-[#EDEDED] relative' >
            <h2>Grab the best deal on <span  className='text-[#008ECC] font-bold ' >  Smartphones</span></h2>
            <h2 className='flex flex-row items-center gap-3 cursor-pointer'  ><span>See All</span>   <FaChevronRight  className='text-[#008ECC]'/> </h2>
          
          <hr className='absolute bottom-0 left-0 w-1/4 bg-[#008ECC] h-[2px]'  />
        </header>

        <div className="display-box flex flex-row items-start justify-start py-5 px-2 ">


        {phones.map((item, index)=> {


          const discount = (item.oldPrice - item.currentPrice)
      

          const percentageDiscount = ((discount/ item.oldPrice) * 100 ).toFixed(0)
          console.log(percentageDiscount)

   

          
          return(
            <div key={index} className="item w-[200px] h-[275px] min-w-[130px] min-h-[220px] bg-white rounded-[16px] flex flex-col justify-start gap-2 overflow-hidden border relative border-[#EDEDED] mx-2 cursor-pointer duration-300 hover:border-[#008ECC] transition-all transform hover:scale-105">



          <div className='h-2/3 w-full flex items-center justify-center bg-[#EDEDED] rounded-t-[16px] ' >
            <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735394389/phone1_guqgvy.png" alt="" className='w-[75px]'  />
          </div>

          <div className='px-3  ' >
            <h2 className='text-[#222222] font-semibold my-1' >{item.name} </h2>

            <h3 className='flex flex-row gap-4 w-full my-1 ' >
              <span  className='text-[#222222] font-semibold ' >  {item.currentPrice}</span>
              <span className="old price text-[#222222] font-light line-through ">{item.oldPrice }</span>
                </h3>
          </div>
          <h5 className='w-full px-3 py-2 text-[#249B3E] border-t border-[#EDEDED] ' >Save - {discount}</h5>

          <div className='absolute top-0 right-0 w-[51px] h-[53px] bg-[#008ECC] rounded-bl-[16px] flex items-center justify-center text-sm text-white font-semibold ' >
            
            {percentageDiscount}% <br /> OFF
          
          </div>


        </div>
          )
        }
        )}

          

   
        </div>
    </div>
  )
}

export default SmartPhonesDisplay