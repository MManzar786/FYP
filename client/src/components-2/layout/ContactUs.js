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
import ExamplesNavbar from "./../../components/Navbars/ExamplesNavbar.js";
// import IndexHeader from "./../components/Headers/IndexHeader.js";
import DemoFooter from "./../../components/Footers/DemoFooter.js";

function ContactHeader() {
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("./../../assets/img/antoine-barres.jpg") + ")"
        }}
      >
        {/* <div className="filter" /> */}
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Get In Touch</h1>
              <div className="fog-low">
                <img
                  alt="..."
                  src={require("./../../assets/img/fog-low.png")}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require("./../../assets/img/fog-low.png")}
                />
              </div>
            </div>
            {/* </div> */}
            {/* <h2 className="presentation-subtitle text-center">Get In Touch</h2> */}
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("./../../assets/img/clouds.png") + ")"
          }}
        />
        <div className="landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <Card className="card-register ml-auto mr-auto">
                  {/* <h2 className="text-center">Keep in touch?</h2> */}
                  <Form className="contact-form">
                    <Row>
                      <Col xs="auto">
                        <label>Name</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" type="text" />
                        </InputGroup>
                      </Col>
                      <Col xs="auto">
                        <label>Email</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="text" />
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
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="footer register-footer text-center">
        <h6>
          © {new Date().getFullYear()}, made with{" "}
          <i className="fa fa-heart heart" />
        </h6>
      </div>
    </>
  );
}

export default ContactHeader;
