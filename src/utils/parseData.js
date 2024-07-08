import React from 'react'
import axios from "axios";


const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const parseData = async(items) => {

    try{
        const videoIds = [];
        const channelIds = [];

        items.forEach((item) => {
            channelIds.push(item.snippet.channelIds)
            videoIds.push(item.id.videoIds);
        });

        const {
            data: {item:channelData}
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="JavaScript Mastery" &key=${API_KEY}&part=snippet&type=videos`);
    }


    console.log(items );
  return (
    <div>

    </div>
  )
}

 