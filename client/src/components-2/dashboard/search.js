import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  async componentDidMount() {
    const res = await axios.get("/search?search=manzar");
    // here your res for search
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default Search;
