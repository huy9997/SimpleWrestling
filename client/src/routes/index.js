import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "../screens/login";
import signin from "../screens/signin";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signin" component={signin} />
  </BrowserRouter>
);

export default Routes;
