import React from "react";
import PropTypes from "prop-types";

import { faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { NavItem, Nav } from "reactstrap";
import classNames from "classnames";

import "../styles/sidebar.css";

const SideBar = props => (
  <div className={classNames("sidebar", { "is-open": props.isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={props.toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>ChamaDigital</h3>
    </div>
    {/* <div className="logo">ChamaDigital</div> */}
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <SubMenu title="Members" items={submenus[0]} />
        </NavItem>
        <NavItem>
          <SubMenu title="Contributions" items={submenus[1]} />
        </NavItem>
        <NavItem>
          <SubMenu title="Loans" items={submenus[2]} />
        </NavItem>
        <NavItem>
          <SubMenu title="Fines" items={submenus[3]} />
        </NavItem>
        {/* <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </NavLink>
        </NavItem> */}
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Add Member",
      icon: faUserPlus,
      target: "add_member"
    },
    {
      title: "View Members",
      icon: faUsers,
      target: "view_members"
    }
  ],
  [
    {
      title: "Page 1",
      icon: faUsers,
      target: "Page-1"
    },
    {
      title: "Page 2",
      icon: faUsers,
      target: "Page-2"
    }
  ],
  [
    {
      title: "Page 3",
      icon: faUsers,
      target: "Page-1"
    },
    {
      title: "Page 4",
      icon: faUsers,
      target: "Page-2"
    }
  ],
  [
    {
      title: "Page 5",
      icon: faUsers,
      target: "Page-1"
    },
    {
      title: "Page 6",
      icon: faUsers,
      target: "Page-2"
    }
  ]
];

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default SideBar;
