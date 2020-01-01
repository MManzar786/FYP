import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import SimpleComponent from "./simpleComponent";
import LandingPage from "./../../views/examples/LandingPage.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/profile"></Redirect>;
  }
  return (
    <Fragment>
      {/* <SimpleComponent /> */}
      <LandingPage />
      {/* <h1> Landing PAge </h1> */}
      {/* <Link to="/login">Login</Link> */}
      {/* <Link to="/register">register</Link> */}
      {/* <Onemore /> */}
    </Fragment>
  );
};

landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(landing);
