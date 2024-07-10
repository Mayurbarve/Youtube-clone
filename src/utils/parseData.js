import React from 'react'
import axios from "axios";


const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

const parseData = async(items) => {

    try{
        const videoIds = [];
        const channelIds = [];

        items.forEach((item) => {
            channelIds.push(item.snippet.channelIds)
            videoIds.push(item.id.videoIds);
        });

        const {
            data: {item:channelsData}
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet.contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`);


        const parsedChannelsData = [];
        channelsData.forEach((channel)=> parsedChannelsData.push({
            id:channel.id,
            image:channel.snippet.thumbnails.default.url,
        }))



        const {
            data:{items:videosData},
        } = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet.contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`
        );

        const parseData =[];
        items.forEach((item,index) =>{
            const {image:channelImage} = parsedChannelsData.find((data) => data.id === item.snippet.channelIds);
            if(channelImage){
                parseData.push({
                    videoId : item.id.videoData,
                    videoData : item.snippet.title,
                    videoDescription : item.snippet.description,
                    videoThumbnail: item.snippet.thumbnails.medium.url,
                    videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                    videoDuration: parseVideoDuration(
                        videosData[index].contentDetails.duration
                    ),
                    videoViews: convertRawtoString(
                        videosData[index].statistics.viewCount
                    ),
                    videoAge: timeSince(new Data(item.snippet.publishAt)),
                    


                })
            }
        })

    }

    catch{

    }


    console.log(items );
  return (
    <div>

    </div>
  )
}

export default parseData