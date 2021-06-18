import { combineReducers } from "redux";
import posts from './posts';
import auth from './auth';
import postDetail from "./postDetail";

export default combineReducers({ posts, auth, postDetail });