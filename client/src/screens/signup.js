import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";

const accountType = [
  {
    value: "wrestler",
    label: "wrestler"
  },
  {
    value: "admin",
    label: "admin"
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      date_of_birth: "",
      address: "",
      team: "",
      weight_class: "",
      wins: "",
      losses: "",
      grade: "",
      type_of_account: ""
    };
  }
  onChange = e => {
    console.log(this.state.first_name);
    console.log("target name ", e.target.name, " target value", e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    if (this.state.type_of_account === "admin") {
      axios
        .post("api/signup", {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
          date_of_birth: this.state.date_of_birth,
          address: this.state.address,
          type_of_account: this.state.type_of_account
        })
        .then(function(response) {
          console.log(response, "sucecss");
        })
        .catch(function(error) {
          console.log(error, "error");
        });
    }
    if (this.state.type_of_account === "wrestler") {
      axios
        .post("api/signup", {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
          date_of_birth: this.state.date_of_birth,
          address: this.state.address,
          type_of_account: this.state.type_of_account,
          team: this.state.team,
          weight_class: this.state.weight_class,
          grade: this.state.grade
        })
        .then(function(response) {
          console.log(response, "sucecss");
        })
        .catch(function(error) {
          console.log(error, "error");
        });
    }
  };
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Box mt={8} display="flex" flexDirection="column" alignItems="center">
          <Avatar m={3}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box mt={3} width={1} noValidate>
            <Grid container spacing={2}>
              {/* first name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="first_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                  onChange={e => this.onChange(e)}
                  value={this.state.first_name}
                />
              </Grid>
              {/* last name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="lname"
                  onChange={e => this.onChange(e)}
                  value={this.state.last_name}
                />
              </Grid>
              {/* email */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={e => this.onChange(e)}
                  value={this.state.email}
                />
              </Grid>
              {/* password */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e => this.onChange(e)}
                  value={this.state.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="date_of_birth"
                  type="date"
                  id="date_of_birth"
                  value={this.state.date_of_birth}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="address"
                  label="Home Town"
                  type="home_town"
                  id="home_town"
                  onChange={e => this.onChange(e)}
                  value={this.state.address}
                />
              </Grid>
              {/* type of account */}
              <Grid item xs={12}>
                <TextField
                  id="type_of_account"
                  name="type_of_account"
                  select
                  label="Type of Account"
                  onChange={e => this.onChange(e)}
                  value={this.state.type_of_account}
                  helperText="Please select the type of account you would like to create"
                  margin="normal"
                >
                  {accountType.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {/* team */}
              <Grid item xs={12} />
              <TextField
                variant="outlined"
                fullWidth
                label="Team"
                id="team"
                name="team"
                onChange={e => this.onChange(e)}
                value={this.state.team}
              />
              <Grid />
              {/* weight class */}
              <Grid item xs={12} />
              <TextField
                variant="outlined"
                fullWidth
                label="Weight Class"
                id="weight_class"
                name="weight_class"
                onChange={e => this.onChange(e)}
                value={this.state.weight_class}
              />
              <Grid />
              {/* grade */}
              <Grid item xs={12} />
              <TextField
                variant="outlined"
                fullWidth
                label="Grade"
                id="grade"
                name="grade"
                onChange={e => this.onChange(e)}
                value={this.state.grade}
              />
              <Grid />
              {/* marketing conditions */}

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              m={3}
              onClick={this.onSubmit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
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
