import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Col, Row, Card } from "reactstrap";
import "../styles/addmember.css";

const AddMember = ({ history }) => (
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
            <form>
              <div className="row">
                <div className="form-group col-sm-12 col-md-6">
                  <asterik>*</asterik>
                  <label>First Name:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group col-sm-12 col-md-6">
                  <asterik>*</asterik>
                  <label>Last Name:</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-12 col-md-6">
                  <asterik>*</asterik>
                  <label>ID Number:</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="form-group col-sm-12 col-md-6">
                  <asterik>*</asterik>
                  <label>Phone Number:</label>
                  <input type="number" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-12 col-md-6">
                  <asterik>*</asterik>
                  <label>Email:</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group col-sm-12 col-md-6">
                  <label>Physical Address:</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="register_button">
                <button
                  type="submit"
                  onClick={() => history.push("/dashboard/view_members")}
                  className="btn btn-success"
                >
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

AddMember.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(AddMember);
