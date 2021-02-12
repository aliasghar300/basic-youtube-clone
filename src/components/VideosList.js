import React from 'react'
import VideosItems from './VideosItems'


function VideosList({videos,onSelectVideo}) {
      return (
        <div className="ui relaxed divided list">
            {videos.map((video)=>{
                return <VideosItems key={video.id.videoId} video={video} onSelectVideo={onSelectVideo} />
            })}
        </div>
    )
}

export default VideosList
