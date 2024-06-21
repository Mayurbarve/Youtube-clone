import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky'>
            <div className='flex gap-8 items-center text-4x1 text-white'>
                <div>
                    <GiHamburgerMenu className='text-2xl '/>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <BsYoutube className='text-red-600 h-20 text-3xl mt-1' />
                    <span className='text-2xl'>Youtube</span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <form>
                    <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-full pl-5'>
                        <div className='flex gap-5 items-center pr-5'>
                            <input type='text' placeholder='search' className='w-96 bg-zinc-900 focus:outline-none border-none ' />

                        </div>
                        <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-full'>
                            <IoIosSearch className='text-xl rounded ' />
                        </button>
                    </div>
                </form>
                <div className='text-xl p-3 bg-zinc-900 rounded-full '>
                    <FaMicrophone />
                </div>
            </div>
            <div className='flex '>
                <div className='flex  items-center gap-8 text-xl'>
                    <RiVideoAddLine />

                    <div className='relative'>
                        <FaBell />
                        <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
                    </div>
                    <img src="https://scitechdaily.com/images/James-Webb-Space-Telescope-Ariane-5-Launcher-2048x1450.jpg" alt='profile logo' className='w-9 h-9 rounded-full' />
                </div>
            </div>

        </div >
    )
}

export default Navbar