import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./authReducers";
import movieReducers from "./movieReducers";

// We will have some reducers here
export default combineReducers({
  movies: movieReducers,
  auth: authReducers,
});
