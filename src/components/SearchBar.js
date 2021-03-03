import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // Use arrow function in class method to bind 'this'
  // Set state by accessing onChange event object's
  // property event.target.value which is the text
  // user enters in input field
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // Call callback from parent component
    // this.props refers to instance of SearchBar
    // onFormSubmit is the callback function onTermSubmit()
    // that is passed to child from parent App.
    // onTermSubmit(term) term refers to SearchBar state
    // onTermSubmit part this.setState(term) 'this' refers
    // to parent element App and term comes from child.
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            {/* Create controlled element
            set value of input from component state.
            onChange callback function to set state.
            Use arrow function to bind 'this' as this specific instance of SearchBar on callback */}
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
