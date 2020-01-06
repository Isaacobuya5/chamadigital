import React, { useState } from "react";
import "antd/dist/antd.css";
import Sidebar from "./Sidebar";
import DashBoardMain from "./DashBoardMain.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import "../styles/dashboard.css";

const DashBoard = () => {
  const [isOpen, setOpen] = useState(true);
  const toggle = () => setOpen(!isOpen);
  return (
    <Router>
      <div className="App wrapper">
        <Sidebar toggle={toggle} isOpen={isOpen} />
        <DashBoardMain toggle={toggle} isOpen={isOpen} />
      </div>
    </Router>
  );
};

export default DashBoard;
