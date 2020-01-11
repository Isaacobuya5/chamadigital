import * as types from "../actionTypes";

export function addNewMember(member) {
  return {
    type: types.ADD_MEMBER_SUCCESS,
    member
  };
}

export function loadMembers(members) {
  return {
    type: types.LOAD_MEMBERS_SUCCESS,
    members
  };
}

export function updateMember(member) {
  return {
    type: types.UPDATE_MEMBER_SUCCESS,
    member
  };
}

export function deleteMember(member) {
  return {
    type: types.DELETE_MEMBER_SUCCESS,
    member
  };
}
