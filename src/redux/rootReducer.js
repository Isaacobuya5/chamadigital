import { combineReducers } from "redux";
import members from "./members/member.reducer";

const rootReducer = combineReducers({
  members: members
});

export default rootReducer;
