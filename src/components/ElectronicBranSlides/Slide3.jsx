import React from 'react'
import { FaBalanceScaleLeft } from 'react-icons/fa'

const Slide3 = () => {
  return (
  <div className='w-full h-full bg-[#FFECDF] p-2 px-5 flex items-center justify-between rounded-[16px] relative overflow-hidden' >
  
  
  
          <div className="deets  flex items-center justify-center flex-col gap-3">
              <h3 className='bg-[#FFD1B0] text-[#222222] py-1 px-2 text-center text-xs rounded-[8px] ' >XIAOMI</h3>
              <span className=' bg-[#FF6900] w-[45px] h-[45px] rounded-[14px] flex items-center justify-center text-4xl text-[#222222] ' >
              <FaBalanceScaleLeft/>
              </span>
              <p className='text-lg text-[#222222] font-[500]  ' >UP to 80% OFF</p>
          </div>
  
          <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735485486/xiaomi_phone_skllhk.png" alt="" className='drop-shadow-2xl z-10 w-[120px] h-[120px] object-contain ' />
  
  
  <div className='w-[200px] h-[200px] rounded-[50%] absolute lg:top-[-50%] sm:top-[-30%] md:top-[-30%] right-0 z-0 flex items-center justify-center border-2 border-[#FFD1B0] ' >
      <div className="inner-circle w-[90%] h-[90%] rounded-[50%] bg-[#FFD1B0] opacity-1 "></div>
  </div>
      </div>
  )
}

export default Slide3