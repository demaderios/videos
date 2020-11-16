import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

const KEY = process.env.REACT_APP_VIDEOS_API_KEY;

class App extends Component {
  onTermSubmit = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
