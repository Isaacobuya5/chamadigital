import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = "http://localhost:8080/api/members";
const baseUrl = "https://chamadigital.herokuapp.com/api/members";

// get all members
export function getMembers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

// saving a new member or update existing member
export function saveMember(member) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(member)
  })
    .then(handleResponse)
    .catch(handleError);
}

// edit an existing member
export function editMember(member) {
  return fetch(baseUrl + `/${member._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(member)
  })
    .then(handleResponse)
    .catch(handleError);
}

// delete an existing member
export function deleteMember(memberId) {
  return fetch(baseUrl + `/${memberId}`, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
