import React from 'react'
import "./VideosItems.css"

const VideosItems = ({video,onSelectVideo}) => {
    
    return (
        <div className="videos-item item" onClick={()=>{onSelectVideo(video)}}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content" >
                <div className="header"> {video.snippet.title} </div>
                
            </div>
        </div>
    )
}

export default VideosItems
