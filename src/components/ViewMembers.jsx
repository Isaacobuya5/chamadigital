import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadRegisteredMembers } from "../redux/members/members.actionss";
import { Col, Row, Card } from "reactstrap";
import Spinner from "../common/Spinner";
import MembersTable from "./MembersTable.jsx";

import "../styles/viewmembers.css";

const ViewMembers = ({ members, loadRegisteredMembers }) => {
  //{ members, loadRegisteredMembers }
  // add
  useEffect(() => {
    if (members.length === 0) {
      loadRegisteredMembers().catch(error => alert("Loading members failed"));
    }
  },[]);

  return members.length === 0 ? (
    <Spinner />
  ) : (
    <div className="view_members">
      <Row>
        <Col sm="12" md="8">
          <Card
            style={{
              background: "#ffffff",
              height: "80vh",
              width: "70vw",
              marginTop: "30px",
              marginLeft: "10px",
              marginRight: "10px"
            }}
          >
            <h5
              className="card-title"
              style={{
                fontWeight: "200px",
                display: "flex",
                marginTop: "10px",
                marginLeft: "10px",
                marginBottom: "10px !important"
              }}
            >
              View Registered Members
            </h5>
            <hr />
            <MembersTable members={members} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

ViewMembers.propTypes = {
  members: PropTypes.array.isRequired,
  loadRegisteredMembers: PropTypes.func.isRequired
};

const mapStateToProps = ({ members }) => {
  return {
    members
  };
};

const mapDispatchToProps = dispatch => ({
  loadRegisteredMembers: () => dispatch(loadRegisteredMembers())
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewMembers);
