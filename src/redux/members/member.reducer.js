import * as types from "../actionTypes";
import initialState from "../initialState";

export default function membersReducer(state = initialState.members, action) {
  switch (action.type) {
    case types.ADD_MEMBER_SUCCESS:
      return [...state, { ...action.member }];
    case types.LOAD_MEMBERS_SUCCESS:
      return action.members;
    case types.UPDATE_MEMBER_SUCCESS:
      return state.map(member =>
        member.IdNum === action.member.IdNum ? action.member : member
      );
    case types.DELETE_MEMBER_SUCCESS:
      return state.filter(member => member.IdNum !== action.member.IdNum);
    default:
      return state;
  }
}
