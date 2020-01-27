import React, { Component } from "react";
import SideBar from "./Sidebar";
export default class Content extends Component {
  render() {
    const spacing = {
      marginLeft: "10%",
      marginTop: "5%",
      display: "block",
      position: "relative"
    };
    return (
      <React.Fragment>
        <SideBar />
        <div className="content-wrapper" style={spacing}>
          <section className="content-header">
            <div className="row">
              <div className="col-md-12">
                <h2 className="title" style={{ color: "black" }}>
                  Edit Profile
                </h2>
                <form>
                  <input
                    type="submit"
                    className="btn btn-success my-1 mr-2"
                    value="something"
                  />
                </form>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
