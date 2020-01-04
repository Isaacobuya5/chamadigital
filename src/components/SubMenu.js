import React, { useState } from "react";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SubMenu = props => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const { icon, title, items } = props;

  console.log(props.items);

  return (
    <div>
      <NavItem
        onClick={toggleNavbar}
        className={classNames({ "menu-open": !collapsed })}
      >
        <NavLink>{title}</NavLink>
      </NavItem>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames("items-menu", { "mb-1": !collapsed })}
      >
        {props.items.map((item, index) => (
          <NavItem key={index} className="pl-4">
            <NavLink tag={Link} to={item.target}>
              <FontAwesomeIcon icon={item.icon} className="mr-2" />
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  );
};

export default SubMenu;
