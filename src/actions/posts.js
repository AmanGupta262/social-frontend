import axios from "axios";
import {
  CLEAR_POST_STATE,
  CREATE_POST,
  FETCH_POST_FAILED,
  UPDATE_POSTS,
} from "../actions";
import { APIUrls } from "../helpers/urls";

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
export function fetchFailed(error) {
  return {
    type: FETCH_POST_FAILED,
    error,
  };
}
export function createPost(post) {
  return {
    type: CREATE_POST,
    post,
  };
}
export function clearPostState() {
  return {
    type: CLEAR_POST_STATE,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();
    axios
      .get(url)
      .then((res) => res.data.data)
      .then((data) => {
        dispatch(updatePosts(data.posts));
      })
      .catch((error) => {
        const errorMsg = error.response.data.message;
        dispatch(fetchFailed(errorMsg));
      });
  };
}
