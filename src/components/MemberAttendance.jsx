import React, { useState } from "react";
import { connect } from "react-redux";
import { loadRegisteredMembers } from "../redux/members/members.actionss";
import { fetchMembers } from "../common/fetchMembers";

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
    memberName: "",
    time: ""
  });

  const [checkedIn, setCheckIn] = useState(false);

  const { memberName, time } = register;

  const handleChange = event => {
    event.preventDefault();
    const { name, value, checked } = event.target;
    // setRegister({
    //   ...register,
    //   [name]: value
    // });

    console.log({
      [event.target.name]: event.target.value || event.target.checked
    });
  };

  const handleCheckbox = event => {
    event.preventDefault();
    if (checkedIn === false) {
      setCheckIn(true);
    } else {
      setCheckIn(false);
    }
  };
  console.log(checkedIn);

  const handleSubmit = event => {
    event.preventDefault();
    alert(`${memberName} ${checkedIn} ${time}`);
    console.log(register);
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
              <input
                type="checkbox"
                className="form-check-input"
                name="checkedIn"
                checked={checkedIn === true}
                onChange={handleCheckbox}
              />
            </div>
            <div className="form-group col-sm-12 col-md-4">
              <label>Time:</label>
              <input type="text" className="form-control" name="time" />
            </div>
          </div>
          <Button color="success" onClick={handleSubmit}>
            UPDATE
          </Button>{" "}
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggle}>
          CANCEL
        </Button>
      </ModalFooter>
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
