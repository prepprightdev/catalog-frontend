// src/store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import courseReducer from "../features/course/courseSlice";
import uiReducer from './UiSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  courses: courseReducer,
  ui: uiReducer,
});

export default rootReducer;
