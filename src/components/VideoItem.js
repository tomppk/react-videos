import React from "react";

// Props object contains video object passed by the parent
// VideoList. Videolist got videos array containing video
// objects from parent App. App got videos array from
// Youtube API.
// Destructuring props.video
// video object has property snippet.title from Youtube
const VideoItem = ({ video }) => {
  return <div>{video.snippet.title}</div>;
};

export default VideoItem;
