import React from "react";
import { Col, Row } from "reactstrap";

import CardComponent from "./Card.jsx";
import MessagesTable from "./Messages.jsx";

// import all icons
import SvgNewUser from "../icons/NewUser";
import UserAttendance from "../icons/Icon";
import Users from "../icons/Users";
import Money from "../icons/Money";
import Cash from "../icons/Cash";
import Shares from "../icons/MoneyBag";

const DashBoardFirst = () => (
  <>
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
          </div>
        </Col>
        <Col sm="12" md="6">
          <div className="messages">
            <span className="title">Messages</span>
            <div className="messages_table">
              <MessagesTable />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </>
);

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

export default DashBoardFirst;
