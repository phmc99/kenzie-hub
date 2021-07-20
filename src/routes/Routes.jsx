import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <SignIn />
      </Route>
      <Route path="/login">
        <SignUp />
      </Route>
    </Switch>
  );
};

export default Routes;
