import React from "react";
import "normalize.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../src/components/HomePage";
import DashBoard from "../src/components/DashBoard.jsx";
import ReactDOM from "react-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/dashboard" component={DashBoard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
