import "./VideoItem.css";
import React from "react";

// Props object contains video object and onVideoSelect
// callback function passed by the parent VideoList.
// Videolist got videos array containing video
// objects from parent App. App got videos array from
// Youtube API.
// Destructuring props
// video object has property snippet.title from Youtube
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // Styling with semantic-ui and CSS
    // When clicking root div element call callback function
    // onVideoSelect with parameter video object
    // Use arrow function so callback is called only when
    // element is clicked
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
