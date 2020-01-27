import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import { getPosts } from "../../actions/post";
// import { Navbar } from "reactstrap";
import Navbar from "./../layout/navbar.js";
import DemoFooter from "../../components/Footers/DemoFooter.js";

import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar />
      <ProfilePageHeader />
      <div className="text-center">
        <h1>Jobs By Alumni's</h1>
      </div>
      <PostForm />
      <div>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
      <DemoFooter />
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
