import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import DemoFooter from "./../../components/Footers/DemoFooter.js";
import Navbar from "./../layout/navbar.js";
const widthstyle = {
  left: "0",
  right: "0",
  position: "absolute"
};
function ContactHeader() {
  return (
    <>
      <Navbar />
      <div
        className="page-header "
        style={{
          backgroundColor: "white !important"
        }}
      >
        <div className="main">
          {/* <div className="section landing-section"> */}
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="12">
                <h2
                  className="text-center"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Keep in touch?
                </h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input size="25" placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>

                    <Col md="6">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input size="25" placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        {/* </div> */}

        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" />
          </h6>
        </div>
      </div>
    </>
  );
}

export default ContactHeader;
