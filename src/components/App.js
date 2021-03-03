import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };

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

  render() {
    return (
      <div className="ui container">
        {/* Pass callback function from parent to child
          element. Child uses props.onFormSubmit to call
          function. Function parameter (term) is input from SearchBar instance's state.term. Arrow function used in callback onTermSubmit to bind 'this' to refer to instance of App  */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
