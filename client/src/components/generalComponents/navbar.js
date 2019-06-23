import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const navbar = () => {
  return (
    <Box flexgrow={1}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" display="flex" flexgrow={1} href="/">
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
    </Box>
  );
};
export default navbar;
