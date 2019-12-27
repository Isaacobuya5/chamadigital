import React from "react";
import "../styles/login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="card" style={{ width: "22rem" }}>
          <div className="card-body">
            <h5 className="card-title login_title">
              Login in into Chama Digital
            </h5>
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
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
