import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "../styles/login.css";

const Login = ({ history }) => (
  <div className="login">
    <div className="card" style={{ width: "22rem" }}>
      <div className="card-body">
        <h5 className="card-title login_title">Login in into Chama Digital</h5>
        <hr />
        <form>
          <div className="form-group">
            <label>ID Number:</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="login_button">
            <button
              type="submit"
              onClick={() => history.push("/dashboard")}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

Login.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Login);
