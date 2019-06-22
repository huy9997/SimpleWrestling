import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const navbar = () => {
  return (
    <div flexGrow={1}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" variant="h6" flexGrow={1} href="/">
            Simple Wrestling
          </Button>
          <Button color="inherit" href="/login">
            Login
          </Button>
          <Button color="inherit" href="tournament">
            Tournament
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default navbar;
