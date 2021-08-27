import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import SignUpPage from "../pages/SignUp";
import SignInPage from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import { useAuth } from "../providers/auth";

const Routes = () => {
  const { isLogged } = useAuth();

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <SignInPage />
      </Route>
      <Route path="/register">
        <SignUpPage />
      </Route>
      {isLogged ? (
        <Route path="/dashboard/:id">
          <Dashboard />
        </Route>
      ) : (
        <Redirect to="/login" />
      )}
    </Switch>
  );
};

export default Routes;
