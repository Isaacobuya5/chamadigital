import React from "react";
import PropTypes from "prop-types";
import "../styles/table.css";
import ButtonAction from "./MemberActions.jsx";

const MembersTable = ({ members }) => (
  <div className="members_table">
    <table>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">ID Number</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email</th>
          <th scope="col">Total Contributions</th>
          <th scope="col">Total Fines</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, index) => (
          <tr key={index}>
            <td scope="row">{index + 1}</td>
            <td data-label="Full Name">
              {member.firstName} {member.lastName}
            </td>
            <td data-label={Object.keys(member)[2]}>{member.IdNum}</td>
            <td data-label={Object.keys(member)[3]}>{member.phone}</td>
            <td data-label={Object.keys(member)[4]}>{member.email}</td>
            <td data-label="Total Contributions">0</td>
            <td data-label="Total Fines">0</td>
            <td data-label="Action">
              <ButtonAction member={member} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

MembersTable.propTypes = {
  members: PropTypes.array.isRequired
};

export default MembersTable;
