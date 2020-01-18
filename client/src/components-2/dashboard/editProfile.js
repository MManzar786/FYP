import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import Navbar from "./../layout/navbar.js";
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
const EditProfile = ({
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

  const inputstyles = {
    height: "35px",
    fontweight: "300",
    fontsize: "30px",
    // border-radius: '4px',
    borderBottomLeftRadius: "7px ",
    borderBottomRightRadius: "7px ",
    borderTopLeftRadius: "7px",
    borderTopRightRadius: "7px",
    borderTop: "none",
    borderLeft: "none",
    border: "1px solid grey",
    paddingLeft: "7px"
  };

  const dpstyle = {
    width: "120px",
    height: "120px",
    overflow: "hidden",
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    marginLeft: "50%"
  };
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
        <div className="content">
          <Container>
            {/* <Row> </Row> */}
            <Row>
              <Col className="ml-auto mt-auto" md="8">
                <Card>
                  <CardHeader>
                    <h2 className="title" style={{ color: "black" }}>
                      Edit Profile
                    </h2>
                  </CardHeader>
                  <CardBody>
                    {/* <h1 className="large text-primary">Edit Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's Edit Profile
      </p> */}
                    <form className="form" onSubmit={e => onSubmit(e)}>
                      <Row>
                        <Col className="pr-1" md="3">
                          <FormGroup>
                            <label>Name</label>
                            {/* <div className="form-group"> */}
                            <input
                              type="text"
                              onChange={e => onChange(e)}
                              value={name}
                              name="name"
                              size="30"
                              style={inputstyles}
                            />
                            {/* <small className="form-text">Your Name </small> */}
                            {/* </div> */}
                          </FormGroup>
                        </Col>

                        <Col className="pr-1" xs="3"></Col>
                        <Col className="pr-1" md="3">
                          <FormGroup>
                            <label>Father's Name</label>
                            <input
                              type="text"
                              onChange={e => onChange(e)}
                              value={fatherName}
                              name="fatherName"
                              size="30"
                              style={inputstyles}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      {/* <small className="form-text">Your Father's Full Name</small> */}
                      {/* </div> */}
                      <Row>
                        <Col className="pr-1" md="3">
                          <FormGroup>
                            <label>Email</label>
                            <input
                              type="text"
                              name="emailId"
                              size="30"
                              value={emailId}
                              onChange={e => onChange(e)}
                              style={inputstyles}
                            />
                          </FormGroup>
                        </Col>
                        {/* </FormGroup><small className="form-text">Email (eg. abc@example.com)</small> */}
                        {/* </div> */}
                        <Col className="pr-1" md="3"></Col>
                        {/* <div className="form-group"> */}
                        <Col className="pr-1" md="3">
                          <FormGroup>
                            <label>Mobile Number</label>
                            <input
                              type="text"
                              name="mobileNo"
                              size="30"
                              value={mobileNo}
                              onChange={e => onChange(e)}
                              style={inputstyles}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      {/* <small className="form-text">Mobile No (eg.03123456789)</small>
        </div> */}
                      <Row></Row>
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <label>Address</label>
                            {/* <div className="form-group"> */}
                            <input
                              type="text"
                              name="address"
                              value={address}
                              onChange={e => onChange(e)}
                              size="40"
                              style={inputstyles}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3"> </Col>
                      </Row>
                      {/* <small className="form-text">
            Address (eg. House no abc street abc rwp pakistan)
          </small>
        </div> */}
                      {/* <div className="form-group"> */}
                      <Row>
                        <Col className="pr-1" md="3">
                          <FormGroup>
                            <label>Passing Year</label>
                            <input
                              value={passingYear}
                              type="text"
                              size="30"
                              name="passingYear"
                              onChange={e => onChange(e)}
                              style={inputstyles}
                            />
                          </FormGroup>
                        </Col>
                        {/* <small className="form-text">Passing Year (eg. 2002 )</small>
        </div> */}
                        <Col className="px-1" md="3"></Col>
                        {/* <div className="form-group"> */}
                        <Col className="px-1" md="3">
                          <FormGroup>
                            <label>Job Status</label>
                            <input
                              type="text"
                              size="30"
                              name="jobStatus"
                              value={jobStatus}
                              onChange={e => onChange(e)}
                              style={inputstyles}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      {/* <small className="form-text">Job Status (eg. Web Developer )</small>
        </div> */}
                      {/* <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div> */}{" "}
                      <Row>
                        {" "}
                        <br />
                      </Row>
                      <Row>
                        {/* <div className="form-group"> */}
                        <Col className="px-1" md="4">
                          <FormGroup className="ml-2">
                            <select
                              name="degree"
                              value={degree}
                              onChange={e => onChange(e)}
                              style={inputstyles}
                            >
                              <option value="0">
                                * Select Professional Degree
                              </option>
                              <option value="bsit">BSIT</option>
                              <option value="bsce">BSCE</option>
                              <option value="bscs">BSCS</option>
                              <option value="Other">Other</option>
                            </select>
                          </FormGroup>
                        </Col>
                        <Col className="px-1" md="3"></Col>
                      </Row>
                      {/* <small className="form-text">
            Tell us what you were studying in kicsit
          </small>
        </div> */}{" "}
                      <br />
                      <input
                        type="submit"
                        className="btn btn-success my-1 mr-2"
                      />
                      <a className="btn btn-primary my-1 ml-2">Go Back</a>
                    </form>
                  </CardBody>
                </Card>
              </Col>

              <Col className="md = 4">
                <Card className="card-user">
                  <div className="image">
                    <img
                      alt="..."
                      src={require("./../../assets/img/bg5.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar border-gray"
                          src={require("./../../assets/img/mike.jpg")}
                          style={dpstyle}
                        />
                        <h3
                          className="title text-center"
                          style={{ color: "black" }}
                        >
                          Manzar Abbas
                        </h3>
                      </a>
                      <p className="description" style={{ color: "black" }}>
                        manzar786
                      </p>
                    </div>
                    <p
                      className="description text-center"
                      style={{ color: "black" }}
                    >
                      Anything discriptive over here
                    </p>
                    <hr />
                    <div className="button-container">
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="lg"
                      >
                        <i className="fab fa-facebook-f" />
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="lg"
                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="lg"
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
