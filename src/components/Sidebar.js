import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LuHistory } from "react-icons/lu";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";


const Sidebar = () => {

  const mainLinks = [
    {
      icon: <IoMdHome className='text-xl' />,
      name: 'Home'
    },
    {
      icon: <SiYoutubeshorts className='text-xl' />,
      name: 'Shorts'
    },
    {
      icon: <MdSubscriptions className='text-xl' />,
      name: 'Subscription'
    }
  ];

  const otherLinks = [
    {
      icon: <CgProfile className='text-xl' />,
      name: 'Profile'
    },
    {
      icon: <LuHistory className='text-xl' />,
      name: 'History'
    },
    {
      icon: <MdOutlinePlaylistPlay className='text-xl' />,
      name: 'Playlist'
    },
    {
      icon: <MdOutlineWatchLater className='text-xl' />,
      name: 'Watchlater'
    },
    {
      icon: <AiFillLike className='text-xl' />,
      name: 'LikedVideos'
    }
  ]




  return (
    <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pd-8 h-screen'>
      <ul className='flex flex-col border-b-2 border-gray-600'>
        {mainLinks.map(
          ({ icon, name }) => {
            return (
              <li key={name} className={`pl-6 py-3 rounded-xl hover:bg-zinc-500 ${name === "Home" ? "bg-zinx-600" : " "} `}>
                <a href='#' className='flex items-center gap-5'>
                  {icon}
                  <span className='text-sm tracking-wider'>{name}</span>
                </a>
              </li>
            )
          }
        )}
      </ul>
      <ul className='flex flex-col border-b-1 border-gray-800'>
        {otherLinks.map(
          ({ icon, name }) => {
            return (
              <li key={name} className={`pl-6 py-3 hover:bg-zinc-500 ${name === "Home" ? "bg-slate-600" : " "}`}>
                <a href='#' className='flex items-center gap-5'>
                  {icon}
                  <span className='text-sm tracking-wider'>{name}</span>
                </a>
              </li>
            )
          }
        )}
      </ul>
    </div>
  )
}

export default Sidebar