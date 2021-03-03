import "./VideoItem.css";
import React from "react";

// Props object contains video object passed by the parent
// VideoList. Videolist got videos array containing video
// objects from parent App. App got videos array from
// Youtube API.
// Destructuring props.video
// video object has property snippet.title from Youtube
const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
