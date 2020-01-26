import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping

export default class SideBar extends Component {
  render() {
    return (
      <SideNav
        onSelect={selected => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="FindAlumins">
            <NavIcon>
              <i className="fas fa-user" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Find Alumnis</NavText>
          </NavItem>
          <NavItem eventKey="PostJob">
            <NavIcon>
              <i className="fas fa-passport" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Post Job</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}
