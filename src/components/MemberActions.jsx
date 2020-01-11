import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteMember } from "../redux/members/members.actionss";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import EditMember from "./EditMember.jsx";
import "../styles/member_action.css";

const MemberActions = ({ member, deleteMember }) => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  const [modal, setModal] = useState(false);
  // toggle state for edit modal window
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Actions</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={toggleModal}>
            <i className="fas fa-pencil-alt"></i> Edit Member
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <i className="fas fa-eye"></i> View Member
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => deleteMember(member)}>
            <i className="fas fa-trash-alt"></i> Delete Member
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <EditMember
        modal={modal}
        toggle={toggleModal}
        className="edit_members"
        member={member}
      />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMember: member => dispatch(deleteMember(member))
  };
};

MemberActions.propTypes = {
  member: PropTypes.object.isRequired,
  deleteMember: PropTypes.func.isRequired
};
export default connect(null, mapDispatchToProps)(MemberActions);
