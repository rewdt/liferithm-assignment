import { combineReducers } from "redux";
import viewActivity from "./ViewActivity";

export default combineReducers({
  activity: viewActivity
});
