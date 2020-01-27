import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deletePost } from "../../actions/post";
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

const jobstyle = {
  paddingBottom: "7px",
  width: "60%"
};
const cardstyle = {
  width: "60%"
};
const PostItem = ({
  auth,
  deletePost,
  post: { _id, text, name, avatar, email, user, comments, date },
  showActions
}) => {
  return (
    <Row>
      <Col>
        <div className="post bg-white p-1 my-11 ml-4" style={jobstyle}>
          <div>
            {/* <Link to={`/profile/${user}`}> */}
            <img class="round-imgg" src={avatar} alt="" />
            <h4>{name}</h4>
            {/* </Link> */}
          </div>
          <div>
            <h4>Job Description:</h4>
            <p class="my-11"> {text}</p>
            <h4>Email ID:</h4>
            <p class="my-11"> {email}</p>
            <p class="post-date">
              Posted on <Moment format="YYYY/MM/DD">{date}</Moment>{" "}
            </p>
            {showActions && (
              <Fragment>
                <Link to={`/jobs/${_id}`} class="btn btn-primary">
                  Discussion
                  {<span class="comment-count">( {comments.length} )</span>}
                </Link>
                {!auth.loading && user === auth.user._id && (
                  <button
                    onClick={e => deletePost(_id)}
                    type="button"
                    class="btn btn-danger"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

PostItem.defaultProps = {
  showActions: true
};
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { deletePost })(PostItem);
