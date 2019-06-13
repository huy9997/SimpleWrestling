import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = () => {
    axios
      .post("http://localhost:5000/api/auth/login", {
        email: "admin@gmail.com",
        password: "password"
      })
      .then(function(response) {
        console.log(response, "sucecss");
      })
      .catch(function(error) {
        console.log(error, "error");
      });
    // axios
    //   .get("api/tournamentBrackets")
    //   .then(function(response) {
    //     console.log(response, "sucess");
    //   })
    //   .catch(function(error) {
    //     console.log(error, "error");
    //   });
  };
  render() {
    console.log(this.state);
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Box
          borderRadius={12}
          border={1}
          p={3}
          display="flex"
          flexDirection="column"
        >
          <Input
            onChange={e => this.onchange(e)}
            name="username"
            value={this.state.username}
            placeholder="username"
          />
          <Input
            onChange={e => this.onchange(e)}
            name="password"
            value={this.state.password}
            placeholder="password"
          />
          <Button onClick={this.onSubmit}>Submit</Button>
        </Box>
      </Grid>
    );
  }
}

export default App;
