import React from "react";
import Header from "./Header.jsx";
import Login from "./Login.jsx";

import "../../index.css";

const HomePage = () => (
  <div className="container-fluid">
    <Header />
    <div
      className="main"
      style={{ backgroundColor: "#615EB2", height: "800px" }}
    >
      <Login />
    </div>
  </div>
);

export default HomePage;
