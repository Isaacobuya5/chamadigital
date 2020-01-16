import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveMember } from "../redux/members/members.actionss";
import { withRouter } from "react-router-dom";
import { Col, Row, Card } from "reactstrap";

import { toast } from "react-toastify";

import "../styles/addmember.css";

const AddMember = ({ saveMember, history }) => {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    IdNum: "",
    phone: "",
    email: "",
    address: ""
  });

  const { firstName, lastName, IdNum, phone, email, address } = member;

  const [isAdmin, setIsAdmin] = useState(false);

  // const [saving, setSaving] = useState(false);

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    return setMember({
      ...member,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // setSaving(true);
    saveMember(member)
      .then(() => {
        // toast message
        toast.success("Member Saved Succesfully");
        history.push("/dashboard/view_members");
      })
      .catch(error => {
        // setSaving(false);
        // setting errors
      });
  };
  return (
    <div className="members_form">
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
                fontWeight: "bold",
                display: "flex",
                marginTop: "10px",
                marginLeft: "10px",
                marginBottom: "10px !important"
              }}
            >
              Register New Member
            </h5>
            <hr />
            <div className="register_member">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-sm-12 col-md-6">
                    <asterik>*</asterik>
                    <label>First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <asterik>*</asterik>
                    <label>Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-12 col-md-6">
                    <asterik>*</asterik>
                    <label>ID Number:</label>
                    <input
                      type="number"
                      className="form-control"
                      name="IdNum"
                      value={IdNum}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <asterik>*</asterik>
                    <label>Phone Number:</label>
                    <input
                      type="number"
                      className="form-control"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-12 col-md-6">
                    <asterik>*</asterik>
                    <label>Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-6">
                    <label>Physical Address:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="register_button">
                  <button type="submit" className="btn btn-success">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    saveMember: member => dispatch(saveMember(member))
  };
};

AddMember.propTypes = {
  history: PropTypes.object.isRequired,
  saveMember: PropTypes.func.isRequired
};

export default withRouter(connect(null, mapDispatchToProps)(AddMember));
