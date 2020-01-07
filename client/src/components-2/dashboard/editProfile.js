import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
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
  return (
    <Fragment>
      <div className="content">
        <Col md="8">
          <Card>
            <CardHeader>
              <h5 className="title">Edit Profile</h5>
            </CardHeader>
            <CardBody>
              {/* <h1 className="large text-primary">Edit Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's Edit Profile
      </p> */}
              <form className="form" onSubmit={e => onSubmit(e)}>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Name</label>
                      {/* <div className="form-group"> */}
                      <input
                        type="text"
                        placeholder="*  Full Name"
                        onChange={e => onChange(e)}
                        value={name}
                        name="name"
                      />
                      {/* <small className="form-text">Your Name </small> */}
                      {/* </div> */}
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Father's Name</label>
                      <input
                        type="text"
                        placeholder="Father's Name"
                        onChange={e => onChange(e)}
                        value={fatherName}
                        name="fatherName"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                {/* <small className="form-text">Your Father's Full Name</small> */}
                {/* </div> */}

                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder="* Email Id"
                        name="emailId"
                        value={emailId}
                        onChange={e => onChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  {/* </FormGroup><small className="form-text">Email (eg. abc@example.com)</small> */}
                  {/* </div> */}

                  {/* <div className="form-group"> */}
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder="* Mobile No"
                        name="mobileNo"
                        value={mobileNo}
                        onChange={e => onChange(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                {/* <small className="form-text">Mobile No (eg.03123456789)</small>
        </div> */}

                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Address</label>
                      {/* <div className="form-group"> */}
                      <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={e => onChange(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                {/* <small className="form-text">
            Address (eg. House no abc street abc rwp pakistan)
          </small>
        </div> */}
                {/* <div className="form-group"> */}
                <Row>
                  <Col className="pr-1" md="4">
                    <FormGroup>
                      <label>Passing Year</label>
                      <input
                        value={passingYear}
                        type="text"
                        placeholder="Your Passing Year"
                        name="passingYear"
                        onChange={e => onChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  {/* <small className="form-text">Passing Year (eg. 2002 )</small>
        </div> */}
                  {/* <div className="form-group"> */}
                  <Col className="px-1" md="4">
                    <FormGroup>
                      <label>Job Status</label>
                      <input
                        type="text"
                        placeholder="Job Status"
                        name="jobStatus"
                        value={jobStatus}
                        onChange={e => onChange(e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                {/* <small className="form-text">Job Status (eg. Web Developer )</small>
        </div> */}
                {/* <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div> */}
                <Row>
                  {/* <div className="form-group"> */}
                  <Col className="px-1" md="4">
                    <FormGroup>
                      <select
                        name="degree"
                        value={degree}
                        onChange={e => onChange(e)}
                      >
                        <option value="0">* Select Professional Degree</option>
                        <option value="bsit">BSIT</option>
                        <option value="bsce">BSCE</option>
                        <option value="bscs">BSCS</option>
                        <option value="Other">Other</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
                {/* <small className="form-text">
            Tell us what you were studying in kicsit
          </small>
        </div> */}
                <input type="submit" className="btn btn-primary my-1" />
                <a className="btn btn-primary my-1">Go Back</a>
              </form>
            </CardBody>
          </Card>
        </Col>
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
