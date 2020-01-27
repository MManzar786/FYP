import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import Navbar from "./../layout/navbar.js";
import ProfilePageHeader from "./../../components/Headers/ProfilePageHeader.js";

import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";

const ProfilePage = ({
  profile: { profile, loading },
  createProfile,
  getCUrrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    emailId: "",
    mobileNo: "",
    address: "",
    degree: "",
    passingYear: "",
    jobStatus: ""
  });

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      name: loading || !profile.name ? "" : profile.name,
      fatherName: loading || !profile.fatherName ? "" : profile.fatherName,
      emailId: loading || !profile.emailId ? "" : profile.emailId,
      address: loading || !profile.address ? "" : profile.address,
      degree: loading || !profile.degree ? "" : profile.degree,
      passingYear: loading || !profile.passingYear ? "" : profile.passingYear,
      jobStatus: loading || !profile.jobStatus ? "" : profile.jobStatus
    });
  }, [loading]);

  const {
    name,
    fatherName,
    emailId,
    mobileNo,
    address,
    degree,
    passingYear,
    jobStatus
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };
  return (
    <Fragment>
      <Navbar />

      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("./../../assets/img/faces/joe-gardner-2.jpg")}
              />
            </div>
            <Row>
              <Col>
                <div className="name">
                  <small>Name:</small> <br />
                  <h4 className="title">{name}</h4>
                </div>
              </Col>
              <Col>
                <small>Email:</small> <br />
                <h4 className="title">{emailId}</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <small>Job Title</small> <br />
                <h4 className="title">{jobStatus}</h4>
              </Col>

              <Col>
                <small>Passing year:</small> <br />
                <h4 className="title">{passingYear}</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <small>Section:</small> <br />
                <h4 className="title">{degree}</h4>
              </Col>
              <Col>
                <small>Address:</small> <br />
                <h4 className="title">{address}</h4>
              </Col>
            </Row>
          </div>
          <br />
          
        </Container>
      </div>
    </Fragment>
  );
};

ProfilePage.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(ProfilePage)
);

/* // <div className="btn-group mb-4" role="group">
    //   <Link to="/edit-profile" className="btn btn-light">
    //     <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
    //   </Link>
    //   <Link to="/profile-page" className="btn btn-light">
    //     <i className="fab fa-black-tie text-info mr-1" />
    //     View Profile
    //   </Link>
    //   <Link to="/add-education" className="btn btn-light">
    //     <i className="fas fa-graduation-cap text-info mr-1" />
    //     Add Education
    //   </Link>
    // </div> */
