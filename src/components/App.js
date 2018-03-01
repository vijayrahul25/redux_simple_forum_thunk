import React from "react";
import User from "../containers/User";
import Navigation from "./Navigation";
import UserList from "../containers/UserList";
import UserPage from "../containers/UserPage";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <div>
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/UserList" component={UserList} />
        <Route exact path="/User" component={User} />
        <Route exact path="/User/:id" component={UserPage} />
      </Switch>
    </div>
  );
};
export default App;
