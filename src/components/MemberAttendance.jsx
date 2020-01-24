import React, { useState } from "react";
import { connect } from "react-redux";
import { loadRegisteredMembers } from "../redux/members/members.actionss";
import { fetchMembers } from "../common/fetchMembers";

import ViewAttendance from "./ViewAttendance.jsx";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const Attendance = ({
  modal,
  toggle,
  className,
  members,
  loadRegisteredMembers
}) => {
  fetchMembers(members, loadRegisteredMembers);

  const [register, setRegister] = useState({
    memberName: ""
  });

  const [checkedIn, setCheckedIn] = useState(false);

  const [time, setTime] = useState("Not checked");

  const { memberName } = register;

  const [attendance, setAttendance] = useState([]);

  console.log(time);

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setRegister({
      ...register,
      [name]: value
      //checkedIn: !checkedIn
    });
  };

  let today = new Date();
  let currentTime =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const handleTimeInput = event => {
    event.preventDefault();
    if (checkedIn === true) {
      setTime(currentTime);
      console.log(time);
    } else {
      setTime("Not Checked");
    }
  };

  const handleCheckbox = event => {
    event.preventDefault();
    setCheckedIn(!checkedIn);
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(`${memberName} ${checkedIn} ${time}`);
    setAttendance([
      ...attendance,
      {
        memberName,
        checkedIn,
        time
      }
    ]);
  };

  return (
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>Register Member Attendance</ModalHeader>
      <ModalBody>
        <form>
          <div className="row">
            <div className="form-group col-sm-12 col-md-5">
              <label>Member Name</label>
              <select
                className="form-control"
                name="memberName"
                value={memberName}
                onChange={handleChange}
              >
                {members.map(({ firstName, lastName }, index) => (
                  <option key={index} value={`${firstName} ${lastName}`}>
                    {firstName} {lastName}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group form-check col-sm-12 col-md-3">
              <label>Checked In?</label>
              <br />
              <div
                style={{
                  paddingTop: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="checkedIn"
                  checked={checkedIn}
                  onChange={handleCheckbox}
                />
              </div>
            </div>
            <div className="form-group col-sm-12 col-md-4">
              <label>Time:</label>
              <input
                type="text"
                className="form-control"
                name="time"
                value={time}
                onClick={handleTimeInput}
                // disabled
              />
            </div>
          </div>
          <Button color="success" onClick={handleSubmit}>
            RECORD
          </Button>
        </form>
        <hr />
        <ViewAttendance attendance={attendance} />
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ members }) => ({
  members
});

const mapDispatchToProps = dispatch => ({
  loadRegisteredMembers: () => dispatch(loadRegisteredMembers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);
