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
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/profile" tag={Link}>
          Profile
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/admin/dashboard" tag={Link}>
          Dashboard
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={logout} to="/" tag={Link}>
          {/* <i aria-hidden={true} className="fa fa-instagram" /> */}
          Log Out
        </NavLink>
      </NavItem>
    </Nav>
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
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/login" tag={Link}>
          {/* <i aria-hidden={true} className="fa fa-facebook-official" /> */}
          Login
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to="/register" tag={Link}>
          {/* <i aria-hidden={true} className="fa fa-instagram" /> */}
          register
        </NavLink>
      </NavItem>
    </Nav>

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
