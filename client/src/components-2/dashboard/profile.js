import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/spinner";
import ProfileActions from "./profileActions";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Container,
  Row,
  Col
} from "reactstrap";
import Navbar from "./../layout/navbar.js";

// core components
import ExamplesNavbar from "./../../components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "./../../components/Headers/LandingPageHeader.js";
import DemoFooter from "./../../components/Footers/DemoFooter.js";

let redirect = () => {
  window.location.href = "http://localhost:5000/auth/linkedin";
  // maybe can add spinner while loading
  return null;
};
//function
const Profile = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  let pageHeader = React.createRef();

  useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {/* <h1 className="large text-primary">Your CNIC is</h1>
      <p className="lead">{user && user.cnic} </p> */}
      {profile !== null ? (
        <Fragment>
          <ProfileActions />{" "}
        </Fragment>
      ) : (
        <Fragment>
          {/* <p className="text-dark">
            You have not yet setup a profile, please add some info
          </p> */}
          <Navbar />
          {/* <ExamplesNavbar /> */}
          <div
            style={{
              backgroundColor: "#FF5733"
            }}
            className="page-header"
            data-parallax={true}
            ref={pageHeader}
          >
            <Container>
              <div className="motto text-left">
                <h3>You dont have a profile yet, please Create a profile </h3>
                <br /> <br />
                <button
                  className="btn btn-primary mr-2"
                  type="button"
                  color="neutral"
                  onClick={e => {
                    e.preventDefault();
                    window.location.href =
                      "http://localhost:5000/auth/linkedin";
                  }}
                >
                  {" "}
                  LogIn using Linked In
                </button>
                <Link to="/create-profile" className="btn-round" color="danger">
                  <button
                    className="btn btn-primary mr-2"
                    type="button"
                    color="neutral"
                    tag={Link}
                  >
                    {/* <Link to="/create-profile" className="btn-round" color="danger"> */}
                    Create Profile
                  </button>
                </Link>
              </div>
            </Container>
            <div className="footer register-footer text-center">
              <h6>
                © {new Date().getFullYear()}, made with{" "}
                <i className="fa fa-heart heart" />
              </h6>
            </div>
          </div>
        </Fragment>
      )}
      <DemoFooter />
    </Fragment>
  );
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
