import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import login from "../screens/Login";
import signup from "../screens/signup";
import home from "../screens/home";
import tournament from "../screens/tournament";
import createTournament from "../screens/createTournament";
import tournamentBracket from "../screens/tournamentBracket";

import Navbar from "../components/generalComponents/navbar";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Route exact path="/" component={home} />
    <Route exact path="/login" component={login} />
    <Route exact path="/signup" component={signup} />
    <Route exact path="/tournament" component={tournament} />
    <Route exact path="/createTournament" component={createTournament} />
    <Route excact path="/tournamentBracket" component={tournamentBracket} />
  </BrowserRouter>
);

export default Routes;
