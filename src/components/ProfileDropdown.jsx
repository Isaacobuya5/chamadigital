import React from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Media,
  DropdownItem
} from "reactstrap";
import "../styles/profile.css";

const ProfileDropdown = ({ logout }) => (
  <UncontrolledDropdown nav>
    <DropdownToggle className="pr-0" nav>
      <Media className="align-items-center">
        <span className="user_name">
          John Doe
          <i className="fas fa-angle-down caret_icon"></i>
          {/* <img src={avator} alt='Avatar' className='avatar_face' /> */}
        </span>
      </Media>
      {/* <i className="far fa-angle-down"></i> */}
    </DropdownToggle>
    <DropdownMenu className="dropdown-menu-arrow dropdown_container" right>
      {/* <Link to="admin/admin-profile"> */}
      <DropdownItem to="/admin/admin-profile" tag={Link}>
        <i className="fas fa-user" />
        <span> View Profile</span>
      </DropdownItem>
      <hr />
      <DropdownItem onClick={logout}>
        <i className="fas fa-running" />
        <span> Logout</span>
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default ProfileDropdown;
