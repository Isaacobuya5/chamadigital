import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";

import CardComponent from "./Card.jsx";
import MessagesTable from "./Messages.jsx";
import Attendance from "./MemberAttendance.jsx";

import { loadRegisteredMembers } from "../redux/members/members.actionss";
import { fetchMembers } from "../common/fetchMembers";
import { connect } from "react-redux";
// import all icons
import SvgNewUser from "../icons/NewUser";
import UserAttendance from "../icons/Icon";
import Users from "../icons/Users";
import Money from "../icons/Money";
import Cash from "../icons/Cash";
import Shares from "../icons/MoneyBag";

const DashBoardFirst = ({ members, loadRegisteredMembers }) => {
  fetchMembers(members, loadRegisteredMembers);
  let memberStatistics = members.length;
  console.log(memberStatistics);

  // adding modal window
  const [modal, setModal] = useState(false);
  // toggle state for edit modal window
  const toggleModal = () => setModal(!modal);
  return (
    <>
      <Row>
        <Col sm="12" md="4">
          <CardComponent
            Icon={Users}
            items={CardDetails[0]}
            count={memberStatistics}
          />
        </Col>
        <Col sm="12" md="4">
          <CardComponent Icon={SvgNewUser} items={CardDetails[1]} count="2" />
        </Col>
        <Col sm="12" md="4" onClick={toggleModal}>
          <CardComponent
            Icon={UserAttendance}
            items={CardDetails[2]}
            count="30"
          />
        </Col>

        <Attendance modal={modal} toggle={toggleModal} className="register" />
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

const mapStateToProps = ({ members }) => {
  return {
    members
  };
};

const mapDispatchToProps = dispatch => ({
  loadRegisteredMembers: () => dispatch(loadRegisteredMembers())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardFirst);
