import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Navbar from "./../layout/navbar.js";

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
  Col,
  Alert,
  CardBody
} from "reactstrap";

// core components
import ExamplesNavbar from "./../../components/Navbars/ExamplesNavbar.js";

// function RegisterPage() {

const Login = ({ login, isAuthenticated }) => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  const [formData, setFormData] = useState({
    cnic: "",

    password: ""
  });

  const { cnic, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    login({ cnic, password });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  const buttonstyle = {
    fontSize: "25px",
    padding: "1px 1px",
    backgroundColor: "transparent",
    color: "white",
    marginTop: "-20%"
  };
  return (
    <Fragment>
      {/* <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p> */}
      {/* <ExamplesNavbar /> */}
      <Navbar />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("./../../assets/img/login-image.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="6">
              <Card className="card-register ml-auto mr-auto">
                <CardBody>
                  <h3 className="title mx-auto text-center">LOG IN</h3>
                  <div className="button-container text-center">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="default"
                      style={buttonstyle}
                      onClick={e => {
                        e.preventDefault();
                      }}
                      size="lg"
                    >
                      <i className="fab fa-facebook-f" />
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="default"
                      style={buttonstyle}
                      onClick={e => {
                        e.preventDefault();
                        window.location.href =
                          "http://localhost:5000/auth/linkedin";
                      }}
                      size="lg"
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
                  </div>
                  <Form className="register-form" onSubmit={e => onSubmit(e)}>
                    {/* <label>CNIC</label> */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-paper" />
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

                    {/* <Input placeholder="Email" type="text" name="email" value={email} onChange={e => onChange(e)} /> */}
                    {/* <label>Password</label> */}
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        required
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                      />
                    </InputGroup>

                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      type="submit"
                    >
                      Log In
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="form-group"> */}
      {/* <input
            type="text"
            placeholder="CNIC"
            name="cnic"
            value={cnic}
            onChange={e => onChange(e)}
            // required
          /> */}
      {/* <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            // minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        No account? <Link to="/register">Sign Up</Link>
      </p> */}
    </Fragment>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(Login);
