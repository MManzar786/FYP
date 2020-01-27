import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "./../layout/navbar.js";

class Search extends Component {
  async componentDidMount() {
    const res = await axios.get("/search?search=");
    // here your res for search
    console.log(res.data);
  }
  

  render() {
    return (
      <Fragment>
        <Navbar />
        {/* <div className="content"> */}
        <div
          className="page-header"
          style={{
            backgroundColor: "orange"
          }}
        >
          <form action="/search" method="GET">
            <input type="text" placeholder="Search" name="search" />
            <input type="submit" value="submit" />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Search;
