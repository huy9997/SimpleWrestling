import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import login from "../screens/login";
import signup from "../screens/signup";
import home from "../screens/home";

import Navbar from "../components/generalComponents/navbar";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Route exact path="/" component={home} />
    <Route exact path="/login" component={login} />
    <Route exact path="/signup" component={signup} />
  </BrowserRouter>
);

export default Routes;
