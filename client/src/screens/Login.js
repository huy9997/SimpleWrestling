import React, { Component } from "react";
import { Redirect, Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from "@material-ui/core";
import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";

import login from "../api/login";

const textFieldStyle = {
  variant: "outlined",
  margin: "normal",
  fullWidth: true
};

class Login extends Component {
  state = {
    email: "",
    password: "",
    loginRedirect: false
  };

  onchange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onsubmit = () => {
    console.log("submit button");
    const { email, password } = this.state;
    login(email, password)
      .then(success => {
        if (success) {
          this.setState(
            {
              loginRedirect: success
            },
            () => {
              console.log(this.state.loginRedirect, "values");
            }
          );
        } else {
          // should probably show this to user
        }
      })
      .catch(error => console.error(error)); // display errors as well
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        {this.state.loginRedirect && <Redirect to="/" />}
        <Box mt={8} display="flex" flexDirection="column" alignItems="center">
          <Avatar m={3}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box mt={3} width={1} noValidate>
            <TextField
              required
              {...textFieldStyle}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.onchange}
              value={this.state.email}
            />
            <TextField
              required
              {...textFieldStyle}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.onchange}
              value={this.state.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              m={3}
              onClick={this.onsubmit}
            >
              login
            </Button>
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
          </Box>
        </Box>
      </Container>
    );
  }
}

export default Login;
