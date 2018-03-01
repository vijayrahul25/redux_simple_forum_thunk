import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/HomePage";
import UserList from "./containers/UserList";
import UserPage from "./containers/UserPage";
import User from "./containers/User";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route exact path="/UserList" component={UserList} />
    <Route exact path="/User" component={User} />
    <Route exact path="/User/:id" component={UserPage} />
  </Route>
);
