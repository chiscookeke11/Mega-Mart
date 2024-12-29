import React from 'react'


const Side2 = () => {
  return (
  <div className='w-full h-full bg-[#FFF3CC] p-2 px-5 flex items-center justify-between rounded-[16px] relative overflow-hidden' >
  
  
  
          <div className="deets  flex items-center justify-center flex-col gap-3">
              <h3 className='bg-[#F6DE8D] text-[#222222] py-1 px-2 text-center text-xs rounded-[8px] ' >REALME</h3>
              <span className=' bg-[#FFC915] p-[2px] px-2  flex items-center justify-center text-xl text-[#222222] ' >
                realme
              </span>
              <p className='text-lg text-[#222222] font-[500]  ' >UP to 80% OFF</p>
          </div>
  
          <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735485486/realme_dytaq8.png" alt="" className=' drop-shadow-2xl z-10 w-[120px] h-[120px] object-contain ' />
  
  
  <div className='w-[200px] h-[200px] rounded-[50%] absolute lg:top-[-50%] sm:top-[-30%] md:top-[-30%] right-0 z-0 flex items-center justify-center border-2 border-[#F6DE8D] ' >
      <div className="inner-circle w-[90%] h-[90%] rounded-[50%] bg-[#F6DE8D] opacity-1 "></div>
  </div>
      </div>
  )
}

export default Side2