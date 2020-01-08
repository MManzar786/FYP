import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

const navBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
<<<<<<< HEAD
    <>
      <NavItem>
        <NavLink to="/profile" tag={Link} style={{ color: "black" }}>
=======
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/profile" tag={Link}>
>>>>>>> d8e3250825527bcaa2c636f0e4a704f2561297c3
          Profile
        </NavLink>
      </NavItem>
      <NavItem>
<<<<<<< HEAD
        <NavLink to="/admin/dashboard" tag={Link} style={{ color: "black" }}>
=======
        <NavLink to="/admin/dashboard" tag={Link}>
>>>>>>> d8e3250825527bcaa2c636f0e4a704f2561297c3
          Dashboard
        </NavLink>
      </NavItem>
      <NavItem>
<<<<<<< HEAD
        <NavLink to="/" tag={Link} style={{ color: "black" }}>
=======
        <NavLink onClick={logout} to="/" tag={Link}>
>>>>>>> d8e3250825527bcaa2c636f0e4a704f2561297c3
          {/* <i aria-hidden={true} className="fa fa-instagram" /> */}
          Log Out
        </NavLink>
      </NavItem>
<<<<<<< HEAD
    </>
=======
    </Nav>
>>>>>>> d8e3250825527bcaa2c636f0e4a704f2561297c3
    // <ul>
    //   <li>
    //     <Link to="/profile">
    //       <i className="fas fa-user"></i>
    //       {""}
    //       <span className="hide-sm"> Profile </span>
    //     </Link>
    //   </li>
    //   <li>
    //     <a onClick={logout} href="#!">
    //       <i className="fas fa-sign-out-alt"></i>
    //       {""}
    //       <span className="hide-sm"> Logout</span>
    //     </a>
    //   </li>
    // </ul>
  );
  const guestLinks = (
<<<<<<< HEAD
    <>
      <NavItem>
        <NavLink to="/login" tag={Link} style={{ color: "black" }}>
=======
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/login" tag={Link}>
          {/* <i aria-hidden={true} className="fa fa-facebook-official" /> */}
>>>>>>> d8e3250825527bcaa2c636f0e4a704f2561297c3
          Login
        </NavLink>
      </NavItem>

      <NavItem>
<<<<<<< HEAD
        <NavLink to="/register" tag={Link} style={{ color: "black" }}>
=======
        <NavLink to="/register" tag={Link}>
>>>>>>> d8e3250825527bcaa2c636f0e4a704f2561297c3
          {/* <i aria-hidden={true} className="fa fa-instagram" /> */}
          register
        </NavLink>
      </NavItem>
<<<<<<< HEAD
    </>
=======
    </Nav>
>>>>>>> d8e3250825527bcaa2c636f0e4a704f2561297c3

    // <ul>
    //   <li>
    //     <Link to="/register">Register</Link>
    //   </li>
    //   <li>
    //     <Link to="/login">Login</Link>
    //   </li>
    // </ul>
  );

  return (
    <>
      <Navbar className="navbar-transparent pt-0" expand="lg">
        <Container>
          <NavbarBrand to="/" tag={Link}>
            KICSIT ALUMNI PORTAL
          </NavbarBrand>
          <button
            aria-controls="navbarNav"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler navbar-toggler-right"
            data-target="#navbar-transparent"
            data-toggle="collapse"
            id="navbar-transparent"
            type="button"
          >
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-transparent">
            <Nav className="ml-auto" navbar>
              {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
              )}
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      {/* <nav className="navbar bg-dark">
      <h1>
        <Link to="/">Kicsit Alumni Portal</Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav> */}
    </>
  );
};

navBar.protoTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(navBar);
