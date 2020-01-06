import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

// import all required components
import DashBoardHeader from "./DashBoardHeader.jsx";
import DashBoardFirst from "./DashboardFirst.jsx";
// import CardComponent from "./Card.jsx";
// import MessagesTable from "./Messages.jsx";
import Footer from "./Footer.jsx";

// // import all icons
// import SvgNewUser from "../icons/NewUser";
// import UserAttendance from "../icons/Icon";
// import Users from "../icons/Users";
// import Money from "../icons/Money";
// import Cash from "../icons/Cash";
// import Shares from "../icons/MoneyBag";

import { Switch, Route } from "react-router-dom";

import "../styles/dashboard_main.css";

const DashBoardMain = props => {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": props.isOpen })}
      style={{ background: "white", width: "80vw", height: "100vh" }}
    >
      {/* <NavBar toggle={props.toggle} /> */}
      <DashBoardHeader />
      <div
        className="main_section"
        style={{
          width: "98%",
          height: "80%",
          marginTop: "10px",
          marginLeft: "10px",
          // marginRight: "15px",
          background: "#F3F5F9"
        }}
      >
        <Switch>
          <Route exact path="/dashboard" component={DashBoardFirst} />
          <Route
            exact
            path="/dashboard/add_member"
            component={() => "Add a New Member"}
          />
          <Route
            exact
            path="/dashboard/view_members"
            component={() => "View Registered members"}
          />
        </Switch>
      </div>
      <div
        style={{
          background: "#F3F5F9",
          height: "5%",
          width: "98%",
          marginLeft: "10px"
        }}
      >
        <div
          style={{
            background: "#ffffff",
            marginTop: "20px",
            marginLeft: "10px",
            marginRight: "10px",
            display: "flex",
            height: "70%"
          }}
        >
          <Footer />
        </div>
      </div>
    </Container>
  );
};

DashBoardMain.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default DashBoardMain;
