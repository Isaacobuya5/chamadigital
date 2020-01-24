import React from "react";
import "../styles/table.css";

const ViewAttendance = ({ attendance }) => (
  <div className="members_table">
    <table>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Member Name</th>
          <th scope="col">time</th>
        </tr>
      </thead>
      <tbody>
        {attendance.map(({ memberName, time }, index) => (
          <tr key={index}>
            <td scope="row">{index + 1}</td>
            <td data-label="Member Name">{memberName}</td>
            <td data-label="Time">{time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ViewAttendance;
