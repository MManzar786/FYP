import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "./../layout/navbar.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      result: []
    };
  }

  // async componentDidMount() {
  // const res = await axios.get("/search");
  // here your res for search
  // }

  handleSearch = async e => {
    e.preventDefault();
    const res = await axios.post("/search", { query: this.state.query });
    this.setState({ result: res.data });
    console.log(res.data);
  };

  handleInput = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input
            onChange={e => this.handleInput(e)}
            name="search"
            type="text"
          />
          <input type="submit" value="Search" name="search" />
        </form>
        <div>
          {this.state.result.map(d => {
            return (
              <div>
                <p>{d.name}</p>
                <p>{d.emailId}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
