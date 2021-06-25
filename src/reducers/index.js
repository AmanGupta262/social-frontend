import { combineReducers } from "redux";
import posts from './posts';
import auth from './auth';
import postDetail from "./postDetail";
import users from "./users";

export default combineReducers({ posts, auth, postDetail, users });