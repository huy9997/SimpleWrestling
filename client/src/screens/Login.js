import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
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
import { LockOutlinedIcon } from "@material-ui/icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginRedirect: false
    };
  }
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onsubmit = e => {
    console.log("submit button");
    axios
      .post("api/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (response.data == "successLogin") {
          console.log("success login");
          this.setState({
            loginRedirect: true
          });
          console.log(this.state.loginRedirect, "values");
        }
      })
      .catch(function(error) {
        console.log(error, "error");
      });
  };
  renderRedirect = () => {
    if (this.state.loginRedirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        {this.renderRedirect()}
        <Box mt={8} display="flex" flexDirection="column" alignItems="center">
          <Avatar m={3}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box mt={3} width={1} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => this.onchange(e)}
              value={this.state.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => this.onchange(e)}
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
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
}

export default App;
