import React, { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import DashBoardHeader from "../components/DashBoardHeader.jsx";
import Sidebar from "./Sidebar";
import DashBoardMain from "./DashBoardMain.jsx";

import "../styles/dashboard.css";

const DashBoard = () => {
  const [isOpen, setOpen] = useState(true);
  const toggle = () => setOpen(!isOpen);
  return (
    <div className="App wrapper">
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <DashBoardMain toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default DashBoard;
