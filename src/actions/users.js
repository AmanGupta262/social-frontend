import axios from "axios";
import { FETCH_START, FETCH_ALL_USERS, FETCH_FRIENDS_OF_USER, FETCH_USER_PROFILE } from "./";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
import { APIUrls } from "../helpers/urls";

export function fetchStart(users) {
  return {
    type: FETCH_START,
  };
}

export function fetchUsers(users) {
  return {
    type: FETCH_ALL_USERS,
    users,
  };
}

export function fetchFriends(friends) {
  return {
    type: FETCH_FRIENDS_OF_USER,
    friends,
  };
}

export function fetchProfile(data) {
  return {
    type: FETCH_USER_PROFILE,
    data,
  };
}

export function fetchAllUsers() {
  return (dispatch) => {
    const config = {
      method: "get",
      url: APIUrls.allUsers(),
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthTokenFromLocalStorage(),
      },
    };
    axios(config)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        dispatch(fetchUsers(data.data.users));
      })
      .catch(function (error) {
        const errorMsg = error.response.data.message;
        console.log(errorMsg);
      });
  };
}

export function profile(id) {
  return (dispatch) => {
    const config = {
      method: "get",
      url: APIUrls.profile(id),
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthTokenFromLocalStorage(),
      },
    };

    axios(config)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        dispatch(fetchProfile(data.data));
      })
      .catch(function (error) {
        const errorMsg = error.response.data.message;
        console.log(errorMsg);
      });


  };
}
