import React from 'react'

const Slide1 = () => {
  return (
    <div class="flex flex-row items-center justify-between w-full px-[6%] py-2 h-full gap-3 relative overflow-hidden">

    <div class="w-3/4 text-[#ffffff] my-1 " >
    <h2 className='text-2xl font-bold'>Best Deal Online on smart watches</h2>
      <h1 class="text-5xl font-bold my-4 ">SMART WEARABLE.</h1>
      <h2 className='text-2xl font-normal'>UP to 80% OFF</h2>
    </div>
  
  
    <div class="w-1/4 my-1 z-10 min-w-[100px] ">
      <img
        src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735377762/image_2_rzjhfw.png"
        alt="Responsive Image"
        class="w-full h-auto  object-fill "
      />
    </div>

    <div className="outer-circle w-[30vw] h-[30vw] rounded-full border-4 border-[#2C3454] absolute opacity-[70%] top-[-10%] right-0 lg:top-[-55%] z-0 flex items-center justify-center ">
        <div className="inner-circle bg-[#2C3454] w-[95%] h-[95%] rounded-full "></div>
    </div>

    
    <div className="outer-circle w-[20vw] h-[20vw] rounded-full border-4 border-[#2C3454] absolute opacity-[70%] bottom-[-10%] right-[10%] lg:bottom-[-55%] z-0 flex items-center justify-center ">
        <div className="inner-circle bg-[#2C3454] w-[95%] h-[95%] rounded-full "></div>
    </div>
  </div>



  
  )
}

export default Slide1