import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "../screens/login";
import signin from "../screens/signin";

import Navbar from "../components/generalComponents/navbar";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signin" component={signin} />
  </BrowserRouter>
);

export default Routes;
