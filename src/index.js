import React from "react";
import "normalize.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../src/components/HomePage";
import DashBoard from "../src/components/DashBoard.jsx";

// import redux store
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

import ReactDOM from "react-dom";

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard" component={DashBoard} />
      </Switch>
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById("app")
);
