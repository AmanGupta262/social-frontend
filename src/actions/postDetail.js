import { FETCH_SINGLE_START, FETCH_SINGLE_FAILED, FETCH_SINGLE_POST } from "./";
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
