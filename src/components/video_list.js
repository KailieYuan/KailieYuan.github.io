import React from 'react';
import VideoListItem from './video_list_item';

import "../App.css"

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => (
    <VideoListItem 
      onVideoSelect={props.onVideoSelect}
      key={video.etag} 
      video={video} 
    />
    ));
  

  return (
    <ul className="videoList">  
      {videoItems}
    </ul>
  );
};

export default VideoList;
