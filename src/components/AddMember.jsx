import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNewMember } from "../redux/members/members.actionss";
import { withRouter } from "react-router-dom";
import { Col, Row, Card } from "reactstrap";
import "../styles/addmember.css";

class AddMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      IdNum: "",
      phone: "",
      email: "",
      address: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let newValue = {
      [name]: value
    };
    console.log(newValue);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.addNewMember(this.state);
    this.props.history.push("/dashboard/view_members");
  };
  render() {
    console.log(this.props);
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
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="form-group col-sm-12 col-md-6">
                      <asterik>*</asterik>
                      <label>First Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-6">
                      <asterik>*</asterik>
                      <label>Last Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
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
                        value={this.state.IdNum}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-6">
                      <asterik>*</asterik>
                      <label>Phone Number:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
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
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-6">
                      <label>Physical Address:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleChange}
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewMember: member => dispatch(addNewMember(member))
  };
};

AddMember.propTypes = {
  history: PropTypes.object.isRequired,
  addNewMember: PropTypes.func.isRequired
};

export default withRouter(connect(null, mapDispatchToProps)(AddMember));
