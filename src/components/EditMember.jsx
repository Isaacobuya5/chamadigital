import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editMember } from "../redux/members/members.actionss";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { toast } from "react-toastify";

import "../styles/edit_modal.css";

const EditMember = ({ modal, toggle, className, member, updateMember }) => {
  const [currentMember, setCurrentMember] = useState(member);
  console.log(currentMember);
  const handleChange = e => {
    e.preventDefault();
    return setCurrentMember({
      ...currentMember,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateMember(currentMember);
    toast.success("Update Succesful");
  };

  const { firstName, lastName, IdNum, phone, email, address } = currentMember;
  // console.log(currentMember);
  return (
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>Edit Member Details</ModalHeader>
      <ModalBody>
        <form>
          <div className="row">
            <div className="form-group col-sm-12 col-md-6">
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12 col-md-6">
              <label>ID Number:</label>
              <input
                type="number"
                className="form-control"
                name="IdNum"
                value={IdNum}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label>Phone Number:</label>
              <input
                type="number"
                className="form-control"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12 col-md-6">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label>Physical Address:</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={address}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={handleSubmit}>
          UPDATE
        </Button>{" "}
        <Button color="danger" onClick={toggle}>
          CANCEL
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateMember: member => dispatch(editMember(member))
  };
};

EditMember.propTypes = {
  toggle: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  member: PropTypes.object.isRequired,
  updateMember: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired
};

export default connect(null, mapDispatchToProps)(EditMember);
