import React from 'react';


const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  }

  const videoId = video.id.videoId; 
  const url = `https://www.youtube.com/embed/${videoId}`; 

return (
  <div className="video-container">
    <div className="responsive-video z-depth-2">
      <iframe  className="iframe-special" width="853" height="480" src={url} frameBorder="0" allowFullScreen />
    </div>
    <div className="details">
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  </div>
);
};


export default VideoDetail; 
