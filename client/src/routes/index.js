import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import login from "../screens/Login";
import signup from "../screens/signup";
import home from "../screens/home";
import test from "../screens/test";
import tournament from "../screens/tournament";
import createTournament from "../screens/createTournament";
import tournamentBracket from "../screens/tournamentBracket";
import Index from "../components/generalComponents/Navbar";
import Footer from "../components/generalComponents/Footer";

const Routes = () => (
  <BrowserRouter>
    <Index />
    <Route exact path="/" component={home} />
    <Route exact path="/test" component={test} />
    <Route exact path="/login" component={login} />
    <Route exact path="/signup" component={signup} />
    <Route exact path="/tournament" component={tournament} />
    <Route exact path="/createTournament" component={createTournament} />
    <Route excact path="/tournamentBracket" component={tournamentBracket} />
    <Footer />
  </BrowserRouter>
);

export default Routes;
