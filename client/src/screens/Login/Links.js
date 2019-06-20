import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Link } from "@material-ui/core";

const Links = () => (
  <Grid container>
    <Grid item xs>
      <Link variant="body2" component={RouterLink} to="#">
        Forgot password?
      </Link>
    </Grid>
    <Grid item>
      <Link variant="body2" component={RouterLink} to="/signup">
        Don't have an account? Sign Up
      </Link>
    </Grid>
  </Grid>
);

export default Links;
