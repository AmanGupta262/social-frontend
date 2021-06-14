import axios from "axios";
import {
  CLEAR_POST_STATE,
  CREATE_POST,
  FETCH_POST_FAILED,
  UPDATE_POSTS,
} from "../actions";
import { APIUrls } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";

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
export function addPost(post) {
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

export function createPost(content) {
  return (dispatch) => {
    const data = JSON.stringify({
      content,
    });
    const config = {
      method: "post",
      url: APIUrls.newPost(),
      headers: {
        "Content-Type": "application/json",
        "Authorization": getAuthTokenFromLocalStorage(),
      },
      data: data,
    };
    axios(config)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(addPost(data.data.post));
          return;
        }
      })
      .catch(function (error) {
        const errorMsg = error.response.data.message;
        dispatch(fetchFailed(errorMsg));
      });
  };
}
