import React, { useEffect, useState } from 'react'
import { FaList, FaMapMarkerAlt, FaSearch, FaShoppingCart, FaTag, FaTruck, FaUser } from 'react-icons/fa'
import { CategoriesNav } from './CategoriesNav';

const Header = () => {


    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsFixed(true)
            }
            else {
                setIsFixed(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });



    const [showCategories, setShowCategories] = useState(false);
    const displayCategories = () => {
        setShowCategories(prevShowCategories => !prevShowCategories)

    }



    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        displayCategories()
        window.scrollTo({ top: 0, behavior: "smooth" })
    }








    return (
        <div className='w-full   ' >

            {/* top-nav open */}

            <div className="top-nav flex flex-row items-center  gap-4 justify-center lg:justify-between md:justify-between flex-wrap px-[5%] p-3 text-[14px]  z-[999]  relative text-[#666666] font-normal bg-[#F5F5F5] text-center ">
                <h5>Welcome to worldwide Megamart!</h5>


                <span className='flex flex-row items-center gap-4  text-[12px] ' >
                    <div className='flex items-center gap-2' > <FaMapMarkerAlt className='text-[#008ECC]' />    <h5>  Deliver to <b>423651</b></h5></div>
                    <div className='flex items-center gap-2'> <FaTruck className='text-[#008ECC]' /><h5>  Track your order</h5></div>
                    <div className='flex items-center gap-2'><FaTag className='text-[#008ECC]' /><h5> All Offers</h5></div>

                </span>
            </div>
            {/* top-nav close */}



            {/* main-nav open */}

            <nav className={`flex flex-row items-center justify-between gap-2  px-[5%] py-4 flex-wrap top-0 left-0 w-full border-[#EDEDED] border-b z-[999]  bg-white ${isFixed ? "fixed" : "relative"} `} >
                <div className='flex gap-4 items-center ' >
                    <div onClick={handleClick} className="menu-btn w-10 h-10 rounded-[10px] bg-[#F3F9FB] flex flex-col gap-1 items-start justify-center p-2 cursor-pointer transform active:scale-[0.9] ">
                        <span className=' w-[95%] h-1 bg-[#008ECC] rounded-[5px] ' ></span>
                        <span className=' w-[75%] h-1 bg-[#008ECC] rounded-[5px] '></span>
                        <span className=' w-[55%] h-1 bg-[#008ECC] rounded-[5px] '></span>
                        <span className=' w-[35%] h-1 bg-[#008ECC] rounded-[5px] '></span>
                    </div>
                    <h2 className='text-2xl text-[#008ECC] font-bold ' >MegaMart</h2>
                </div>



                <div className="w-[70%] min-w-[330px] max-w-[900px] flex items-center justify-between gap-3 ">
                    <div className="w-full max-w-[65%] min-w-[200px] hidden lg:flex md:flex sm:hidden items-center justify-between p-3 px-3 font-normal text-md bg-[#F3F9FB] gap-2 rounded-[10px]">
                        <span className="flex items-center gap-2 w-full">
                            <FaSearch className="text-[#008ECC] font-normal text-xl cursor-pointer mx-1" />
                            <input
                                type="search"
                                placeholder="Search essentials, groceries and more..."
                                className="p-1 border-none outline-none bg-transparent placeholder-[#666666] w-2/3"
                            />
                        </span>
                        <FaList className="text-[#008ECC] font-normal text-xl cursor-pointer" />
                    </div>



                    <span className='flex flex-row items-center justify-center'>
                        <button className='hidden lg:flex md:flex sm:hidden  flex-row items-center justify-center gap-2 py-1 px-3  text-sm bg-white border-r border-[#D9D9D9] ml-1 outline-none whitespace-nowrap'>
                            <FaUser className='text-[#008ECC]' /> Sign Up/Sign In
                        </button>
                        <button className='flex flex-row items-center justify-center gap-2 py-1 px-3 text-sm bg-white mr-1 outline-none border-none whitespace-nowrap'>
                            <FaShoppingCart className='text-[#008ECC]' /> Cart
                        </button>
                    </span>


                </div>

            </nav>

            {/* main-nav close */}



            <CategoriesNav
                showCategories={showCategories}
            />



        </div>
    )
}

export default Header