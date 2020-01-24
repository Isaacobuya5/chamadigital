import { useEffect } from "react";

export const fetchMembers = (members, loadRegisteredMembers) => {
  useEffect(() => {
    if (members.length === 0) {
      loadRegisteredMembers().catch(error => alert("Loading members failed"));
    }
  }, []);
};

export const totalMemberCount = members => {
  return members.reduce((acc, total) => acc + total);
};
