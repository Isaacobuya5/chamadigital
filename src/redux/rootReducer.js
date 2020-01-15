import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import members from "./members/member.reducer";

const rootReducer = combineReducers({
  members,
  apiCallsInProgress
});

export default rootReducer;
