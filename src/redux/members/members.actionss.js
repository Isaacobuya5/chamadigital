import * as types from "../actionTypes";
import * as membersApi from "../../api/membersApi";
import { beginApiCall, apiCallError } from "../apiStatusActions";

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

// thunks to handle asynchronous database requests

// saving a member
export function saveMember(member) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return membersApi
      .saveMember(member)
      .then(() => {
        // update an existing member or add a new member
        dispatch(addNewMember(member));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

// editing a member
export function editMember(member) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return membersApi
      .editMember(member)
      .then(savedMember => {
        // update an existing member or add a new member
        dispatch(updateMember(savedMember));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
// loading members
export function loadRegisteredMembers() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return membersApi
      .getMembers()
      .then(members => {
        dispatch(loadMembers(members));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

// delete member optimistically
export function deleteMemberOptimistic(member) {
  return {
    type: types.DELETE_MEMBER_OPTIMISTIC,
    member
  };
}

// deleting a registered member
export function deleteRegistered(member) {
  return function(dispatch) {
    dispatch(deleteMemberOptimistic(member));
    return membersApi.deleteMember(member._id);
  };
}
