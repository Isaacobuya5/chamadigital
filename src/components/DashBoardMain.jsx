import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import DashBoardHeader from "./DashBoardHeader.jsx";
import CardComponent from "./Card.jsx";

// import all react
import SvgNewUser from "../icons/NewUser";
import UserAttendance from "../icons/Icon";
import Users from "../icons/Users";
import Money from "../icons/Money";
import Cash from "../icons/Cash";
import Shares from "../icons/MoneyBag";

// import the required icons for cards
import { Col, Row } from "reactstrap";
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
        <Row>
          <Col sm="12" md="4">
            <CardComponent Icon={Users} items={CardDetails[0]} />
          </Col>
          <Col sm="12" md="4">
            <CardComponent Icon={SvgNewUser} items={CardDetails[1]} />
          </Col>
          <Col sm="12" md="4">
            <CardComponent Icon={UserAttendance} items={CardDetails[2]} />
          </Col>
        </Row>

        <div className="summary">
          <Row>
            <Col sm="12" md="6">
              <div className="financial_summary">
                <span className="title">Financial Summary</span>
                <div className="financial_cards">
                  <CardComponent Icon={Money} items={CardDetails[3]} />
                  <div style={{ display: "block" }}>
                    <CardComponent Icon={Cash} items={CardDetails[4]} />
                    <CardComponent Icon={Shares} items={CardDetails[5]} />
                  </div>
                </div>
                {/* <CardComponent Icon="" items={CardDetails[3]} /> */}
              </div>
            </Col>
            <Col sm="12" md="6">
              <div className="messages">
                <span className="title">Messages</span>
                {/* <CardComponent items={CardDetails[4]} /> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={() => "Hello"} />
        <Route exact path="/about" component={() => "About"} />
        <Route exact path="/Pages" component={() => "Pages"} />
        <Route exact path="/faq" component={() => "FAQ"} />
        <Route exact path="/contact" component={() => "Contact"} />
        <Route exact path="/Home-1" component={() => "Home-1"} />
        <Route exact path="/Home-2" component={() => "Home-2"} />
        <Route exact path="/Home-3" component={() => "Home-3"} />
        <Route exact path="/Page-1" component={() => "Page-1"} />
        <Route exact path="/Page-2" component={() => "Page-2"} />
        <Route exact path="/page-1" component={() => "page-1"} />
        <Route exact path="/page-2" component={() => "page-2"} />
        <Route exact path="/page-3" component={() => "page-3"} />
        <Route exact path="/page-4" component={() => "page-4"} />
      </Switch>
    </Container>
  );
};

const CardDetails = [
  {
    text: "Members",
    total: 25,
    small: "small"
  },
  {
    text: "Membership Requests",
    total: 2,
    small: "small"
  },
  {
    // icon: faUserCheck,
    text: "Weekly Attendance",
    total: 30,
    small: "small"
  },
  {
    text: "Total Contributions",
    total: 100000,
    medium: "medium"
  },
  {
    text: "Fines",
    total: 1500,
    x_small: "xsmall"
  },
  {
    text: "Total Shares",
    total: 150,
    x_small: "xsmall"
  },
  {
    text: "Messages",
    total: ""
  }
];

export default DashBoardMain;
