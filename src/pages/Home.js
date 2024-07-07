import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {useAppDispatch,useAppSelector} from "../hooks/useApp";

const Home = () => {

  const dispatch = useAppDispatch();
  const Videos = useAppSelector((state)=> state.youtubeApp.videos);

   

  return (
    <div>
        <Navbar/>
        <Sidebar/>
    </div>
  )
}

export default Home