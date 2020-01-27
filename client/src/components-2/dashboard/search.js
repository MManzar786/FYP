import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "./../layout/navbar.js";
import { Card, CardBody, Table, Row, Col } from "reactstrap";
import DemoFooter from "../../components/Footers/DemoFooter.js";

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
    const inputspacing = {
      marginTop: "150px",
      height: "70px",
      width: "400px",
      borderRadius: "5px",
      fontSize: "25px",
      padding: "7px 10px"
    };
    const tablestyle = {
      marginTop: "70%",
      marginRight: "65%",
      fontSize: "17px",
      borderColor: "black"
    };
    const buttonstyle = {
      height: "60px",
      width: "120px",
      marginLeft: "10px",
      borderRadius: "5px",
      borderColor: "red",
      backgroundColor: "red",
      fontSize: "25px",
      fontWeight: "400"
    };
    return (
      <Fragment>
        <div>
          <Navbar />
          <div className="page-header" style={{ backgroundColor: "orange" }}>
            <Row>
              <form onSubmit={this.handleSearch}>
                <input
                  onChange={e => this.handleInput(e)}
                  name="search"
                  style={inputspacing}
                  type="text"
                />
                <input
                  type="submit"
                  value="Search"
                  name="search"
                  style={buttonstyle}
                />
              </form>
            </Row>
            <Row>
              <div>
                {this.state.result.map(d => {
                  return (
                    <div>
                      <Table striped bordered hover style={tablestyle}>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job title</th>

                            <th>Degree</th>
                            <th>Passing Year</th>
                            <th>Contact</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{d.name}</td>
                            <td>{d.emailId}</td>
                            <td>{d.jobStatus}</td>
                            <td>{d.degree}</td>
                            <td>{d.passingYear}</td>
                            <td>{d.mobileNo}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  );
                })}
              </div>
            </Row>
          </div>
        </div>
        <DemoFooter />
      </Fragment>
    );
  }
}

export default Search;
