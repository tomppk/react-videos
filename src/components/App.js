import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    // youtube is predefined instance of axios.
    // In addition to default params set in youtube.js
    // add query string q and give it value of search term
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // Set App state
    this.setState({ videos: response.data.items });
  };

  // Reference to this callback function passed to child
  // VideoList which passes it to child VideoItem.
  // VideoItem inputs parameter video that is the currently
  // selected video and calls callback function.
  // Callback sets App element state selectedVideo to video
  // object.
  // App state selectedVideo is passed to child VideoDetail
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        {/* Pass callback function from parent to child
          element. Child uses props.onFormSubmit to call
          function. Function parameter (term) is input from SearchBar instance's state.term. Arrow function used in callback onTermSubmit to bind 'this' to refer to instance of App  */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
