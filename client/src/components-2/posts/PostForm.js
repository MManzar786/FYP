import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
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

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  return (
    <Row>
      <Col></Col>
      <Col>
        <div class="post-formm">
          <form
            class="formm my-11"
            onSubmit={e => {
              e.preventDefault();
              addPost({ text });
              setText("");
            }}
          >
            <textarea
              name="text"
              cols="20"
              rows="3"
              placeholder="Create a post"
              value={text}
              onChange={e => setText(e.target.value)}
              required
            ></textarea>
            <input type="submit" class="btn btn-dark my-11" value="Post" />
          </form>
        </div>
      </Col>
      <Col></Col>
    </Row>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
