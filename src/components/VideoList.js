import React from "react";
import VideoItem from "./VideoItem";

// Destructuring { videos, onVideoSelect } properties from
// this.props. Callback onVideoSelect is not destructured.
// that is passed to VideoList from parent element App
const VideoList = ({ videos, onVideoSelect }) => {
  // Take videos array property passed from parent App
  // and map over each video in array. Returns new array
  // that contains list of <VideoItem> components.
  // VideoList passes each video object to child VideoItem
  // as props
  const renderedList = videos.map((video) => {
    return (
      // Key property used internally by React to
      // eg. identify already rendered components
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
