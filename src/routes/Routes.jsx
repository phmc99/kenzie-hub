import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    localStorage.getItem("@kenziehub:token");
    setIsLogged(true);
  }, []);

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
