import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  POST_ERROR,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./constants";
import post from "../reducers/post";

// GET POSTS

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get("/jobs");
    console.log(res.data);

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// DELETE POSTS
export const deletePost = id => async dispatch => {
  try {
    const res = await axios.delete(`/jobs/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id
    });

    dispatch(setAlert("Post removed", "success"));
  } catch (err) {}
};

// ADD POST
export const addPost = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/jobs", formData, config);
    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert("Post Created", "success"));
  } catch (err) {}
};

// GET POST

export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(`/jobs/${id}`);
    console.log(res.data);

    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// ADD COMMENT
export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post(`/comment/${postId}`, formData, config);
    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {}
};

// DELETE COMMENT
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    const res = await axios.delete(`/comment/${postId}/${commentId}`);
    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert("Comment Removed", "success"));
  } catch (err) {}
};
