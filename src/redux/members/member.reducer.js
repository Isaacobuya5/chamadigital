import * as types from "../actionTypes";
import initialState from "../initialState";

export default function membersReducer(state = initialState.members, action) {
  switch (action.type) {
    case types.ADD_MEMBER_SUCCESS:
      return [...state, { ...action.member }];
    case types.LOAD_MEMBERS_SUCCESS:
      return action.members;
    case types.UPDATE_MEMBER_OPTIMISTIC:
      return state.map(member =>
        member._id === action.member._id ? action.member : member
      );
    case types.DELETE_MEMBER_OPTIMISTIC:
      return state.filter(member => member._id !== action.member._id);
    default:
      return state;
  }
}
