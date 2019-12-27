import React from "react";

import "../../src/styles/sidebar.css";

// const menuItems = ["Members", "Contributions", "Loans", "Fines"];

const Sidebar = props => (
  // <div className="menu">
  //   {menuItems.map(({ menu, submenu }, index) => (
  //     <MenuItem key={index} item={menu} submenu={submenu} />
  //   ))}
  // </div>

  <div className="sidebar-container">
    <div className="logo">
      <h2>Chama Digital</h2>
    </div>
    <div className="menu">
      <li className="item" id="profile">
        <a href="#profile" className="btn">
          Members <i className="fas fa-angle-down"></i>
        </a>
        <div className="smenu">
          <a href="#">
            <i className="fas fa-user-plus"></i>Add Member
          </a>
          <a href="#">
            <i className="fas fa-users"></i>View Members
          </a>
        </div>
      </li>
      <li className="item" id="messages">
        <a href="#messages" className="btn">
          <i className="far fa-envelope" />
          Contributions
        </a>
        <div className="smenu">
          <a href="#">new</a>
          <a href="#">Sent</a>
        </div>
      </li>
      <li className="item" id="settings">
        <a href="#settings" className="btn">
          <i className="fas fa-cog" />
          Loans
        </a>
        <div className="smenu">
          <a href="#">Password</a>
          <a href="#">Language</a>
        </div>
      </li>
      <li className="item">
        <a className="btn" href="#">
          <i className="fas fa-sign-out-alt" />
          Fines
        </a>
      </li>
    </div>
  </div>
);

export default Sidebar;
