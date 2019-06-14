import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "../screens/login";
import signup from "../screens/signup";

import Navbar from "../components/generalComponents/navbar";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={signup} />
  </BrowserRouter>
);

export default Routes;
