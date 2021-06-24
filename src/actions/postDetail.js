import { FETCH_SINGLE_START, FETCH_SINGLE_FAILED, FETCH_SINGLE_POST, ADD_COMMENT } from "./";
import { fetchPosts } from './posts';
import axios from "axios";
import { APIUrls } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";

export function fetchStart() {
  return {
    type: FETCH_SINGLE_START,
  };
}

export function fetchFailed(error) {
  return {
    type: FETCH_SINGLE_FAILED,
    error,
  };
}

export function fetchSinglePost(post) {
  return {
    type: FETCH_SINGLE_POST,
    post,
  };
}

export function fetchPost(postId) {
  return (dispatch) => {
    dispatch(fetchStart());
    const config = {
      method: "get",
      url: APIUrls.detailPost(postId),
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthTokenFromLocalStorage(),
      },
    };

    axios(config)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(fetchSinglePost(data.data.post));
          return;
        }
      })
      .catch(function (error) {
        const errorMsg = error.response.data.message;
        console.log(errorMsg);
      });
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function createComment(content, post) {
  return (dispatch) => {
    const data = JSON.stringify({
      content,
      post,
    });
    const config = {
      method: "post",
      url: APIUrls.addComment(),
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthTokenFromLocalStorage(),
      },
      data,
    };

    axios(config)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(addComment(data.data.comment));
          dispatch(fetchPosts())
          return;
        }
      })
      .catch(function (error) {
        const errorMsg = error.response.data.message;
        console.log(errorMsg);
      });
  };
}