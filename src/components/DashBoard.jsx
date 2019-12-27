import React from "react";
import DashBoardHeader from "../components/DashBoardHeader.jsx";
import Sidebar from "./Sidebar.jsx";

const DashBoard = () => (
  <div className="homepage-container">
    <Sidebar />
    <main className="content-section">
      <DashBoardHeader />
    </main>
  </div>
);

export default DashBoard;
