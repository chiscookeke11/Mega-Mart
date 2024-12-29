import React from 'react'
import { FaApple } from 'react-icons/fa6'

const Slide1 = () => {
  return (
    <div className='w-full h-full bg-[#313131] p-2 px-5 flex items-center justify-between rounded-[16px] relative overflow-hidden' >



        <div className="deets  flex items-center justify-center flex-col gap-3">
            <h3 className='bg-[#494949] text-white py-1 px-2 text-center text-xs rounded-[8px] ' >IPHONE</h3>
            <span className=' bg-white w-[45px] h-[45px] rounded-[14px] flex items-center justify-center text-4xl text-[#222222] ' >
                <FaApple/>
            </span>
            <p className='text-lg text-white font-[500]  ' >UP to 80% OFF</p>
        </div>

        <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735483000/iphone_x0wyvn.png" alt="" className='drop-shadow-2xl z-10 w-[120px] h-[120px] object-contain ' />


<div className='w-[200px] h-[200px] rounded-[50%] absolute lg:top-[-50%] sm:top-[-30%] md:top-[-30%] right-0 z-0 flex items-center justify-center border-2 border-[#404040] ' >
    <div className="inner-circle w-[90%] h-[90%] rounded-[50%] bg-[#404040] opacity-1 "></div>
</div>
    </div>
  )
}

export default Slide1