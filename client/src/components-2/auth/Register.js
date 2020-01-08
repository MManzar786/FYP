import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import ExamplesNavbar from "./../../components/Navbars/ExamplesNavbar.js";
import Navbar from "./../layout/navbar.js";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    cnic: "",
    password: "",
    password2: ""
  });

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  const { cnic, password, password2 } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password Not Matched", "danger");
    } else {
      register({ cnic, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  return (
    <Fragment>
      <Navbar />
      <div className="page-header" style={{ background: "$white-color" }}>
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="6">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Register</h3>
                <form className="register-form" onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                    <label>CNIC</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="CNIC"
                        name="cnic"
                        value={cnic}
                        onChange={e => onChange(e)}
                      />
                    </InputGroup>
                    {/* </div> */}

                    {/* <div className="form-group"> */}
                    <label>Password</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                      />
                    </InputGroup>
                    {/* </div> */}
                    {/* <div className="form-group"> */}
                    <label>Confirm Password</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}
                      />
                    </InputGroup>
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Register"
                    to="/profile"
                    onSubmit={e => onSubmit(e)}
                    tag={Link}
                  />
                </form>
                <p className="my-1">
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { setAlert, register })(Register);
