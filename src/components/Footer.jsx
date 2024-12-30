import React from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-[#008ECC] px-[4%] py-[2%] flex flex-col gap-3 items-center justify-center relative overflow-hidden ' >

        <div className=" w-full top flex flex-col lg:flex-row md:flex-row flex-wrap  justify-evenly gap-5 mb-[3%] ">


            <div className='min-w-[320px]  text-white text-sm z-10 ' >

                <h1 className='text-white text-4xl font-bold mb-[6%] ' >MegaMart</h1>
                <h2 className='text-lg mb-[5%] ' >Contact Us</h2>

                <div className='flex flex-row items-start gap-3 my-3'  >
                <FaWhatsapp className='text-lg ' />
                <div>
                    <p>Whatsapp</p>
                    <p>09036531295</p>
                </div>
                </div>


                <div  className='flex flex-row items-start gap-3 my-3' >
                <FaPhone/>
                <div>
                    <p>Call Us</p>
                    <p>09036531295</p>
                </div>
                </div>


                <div className="download my-5">
                <h2 className='text-lg mb-[5%] ' >Download App</h2>

                <div className='w-full flex items-center gap-7 ' >
                    <a href="#"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735556281/app_store_vqqnbg.png" alt="" className='w-[120px] ' /></a>
                    <a href="#"><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1735556281/gle_play_om3yea.png" alt="" className='w-[120px] ' /></a>
                </div>
                </div>




            </div>


            <div className='block text-white z-10' >
                <h1  className='text-lg mb-[6%] py-3 border-b-2 border-white w-fit ' >Most Popular Categories</h1>
 
                <ul className='my-4 list-disc px-2' >
                    <li className='my-2' >  Staples</li>
                    <li className='my-2'>Beverages</li>
                    <li className='my-2'>Personal Care</li>
                    <li className='my-2'>Home Care</li>
                    <li className='my-2'>Baby Care</li>
                    <li className='my-2'>Vegetables & Fruits</li>
                    <li className='my-2'>Snacks & Foods</li>
                    <li className='my-2'>Dairy & Bakery</li>
                </ul>
            </div>





            <div className='block text-white mx-2 z-10' >
                <h1  className='text-lg mb-[6%] py-3 border-b-2 border-white w-fit ' >Customer Services</h1>

                <ul  className='my-4 list-disc px-2'>
                    <li className='my-2'>  Staples</li>
                    <li className='my-2'>Beverages</li>
                    <li className='my-2'>Personal Care</li>
                    <li className='my-2'>Home Care</li>
                    <li className='my-2'>Baby Care</li>
                    <li className='my-2'>Vegetables & Fruits</li>
                    <li className='my-2'>Snacks & Foods</li>
                    <li className='my-2' >Dairy & Bakery</li>
                </ul>
            </div>







          









        </div>




































        <div className="bottom w-full text-center text-sm text-[#FFFFFF] font-[400]  border-t border-[#05ABF3] py-5" >

            <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
        </div>


        <div className="outer-circle absolute w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border-2 border-[#0C9BDA] rounded-[50%] top-[-10%] right-[-7%] z-0 flex items-center justify-center ">
            <div className="inner-circle w-[90%] h-[90%] rounded-[50%] bg-[#0c9bda] "></div>
        </div>

    </div>
  )
}

export default Footer