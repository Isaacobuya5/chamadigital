import React from "react";
import "../styles/table.css";

const MessagesTable = () => (
  <div>
    <table>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Phone</th>
          <th scope="col">Messages</th>
          <th scope="col">Time</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td scope="row" data-label="Column 1">
            1
          </td>
          <td data-label="Column 2"> 0705407602</td>
          <td data-label="Column 3">
            I wont be able to attend tommorrows meeting.
          </td>
          <td data-label="Column 4">4:00pm</td>
        </tr>
        <tr>
          <td scope="row" data-label="Column 1">
            2
          </td>
          <td data-label="Column 2">0700346509</td>
          <td data-label="Column 3">
            I have a problem with my financial statement
          </td>
          <td data-label="Column 4">3.30pm</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default MessagesTable;
