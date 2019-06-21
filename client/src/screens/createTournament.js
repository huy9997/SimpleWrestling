import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import ls from "local-storage";
import { Button } from "@material-ui/core";

const wrestlingStyles = [
  {
    value: "Folk Style"
  },
  {
    value: "Free Style"
  },
  {
    value: "Greco Roman"
  }
];
const wrestlingLevel = [
  {
    value: "Middle School"
  },
  {
    value: "Junior Varcity"
  },
  {
    value: "Varcity"
  },
  {
    value: "Junior Collegiate"
  },
  {
    value: "Collegiate"
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      description: "",
      tournament_start_date: Date,
      tournament_end_date: Date,
      wrestling_style: "",
      wrestling_level: "",
      tournament_logo: "",
      tournament_flier: "",
      admin_account: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onsubmit = e => {
    let {
      name,
      location,
      description,
      tournament_start_date,
      tournament_end_date,
      wrestling_style,
      wrestling_level,
      tournament_flier,
      tournament_logo,
      admin_account
    } = this.state;
    admin_account = ls.get("userInfo")[1];
    console.log(this.state, "the state of everything");
    axios
      .post("api/createtournament", {
        name: name,
        location: location,
        description: description,
        tournament_start_date: tournament_start_date,
        tournament_end_date: tournament_end_date,
        wrestling_style: wrestling_style,
        wrestling_level: wrestling_level,
        tournament_flier: tournament_flier,
        tournament_logo: tournament_logo,
        admin_account: admin_account
      })
      .then(response => {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error, "error");
      });
  };

  render() {
    const {
      name,
      location,
      description,
      tournament_start_date,
      tournament_end_date,
      tournament_logo,
      tournament_flier,
      wrestling_style,
      wrestling_level
    } = this.state;
    return (
      <Container component="main" maxWidth="xl" width="75%">
        <Box mt={8} display="flex" flexDirection="column" alignItems="center">
          {/* Tournament Name*/}
          <FormControl margin="normal" width={1}>
            <InputLabel>Tournament Name</InputLabel>
            <Input
              name="name"
              id="name"
              onChange={e => this.onChange(e)}
              value={name}
            />
          </FormControl>
          {/* Location Name*/}
          <FormControl margin="normal" width={1}>
            <InputLabel>Location</InputLabel>
            <Input
              name="location"
              id="location"
              onChange={e => this.onChange(e)}
              value={location}
            />
          </FormControl>
          {/* Description */}
          <FormControl margin="normal">
            <InputLabel>Description</InputLabel>
            <Input
              name="description"
              id="description"
              onChange={e => this.onChange(e)}
              value={description}
            />
            <FormHelperText id="description-helper-text">
              Please provide any unique information about your Tournament!
            </FormHelperText>
          </FormControl>
          {/* tournament_start_date */}
          <FormControl margin="normal" width={1}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Tournament Start Date"
              id="tournament_start_date "
              name="tournament_start_date"
              onChange={e => this.onChange(e)}
              value={tournament_start_date}
            />
          </FormControl>
          {/* tournament_end_date */}
          <FormControl margin="normal" width={1}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Tournament End Date"
              id="tournament_end_date"
              name="tournament_end_date"
              onChange={e => this.onChange(e)}
              value={tournament_end_date}
            />
          </FormControl>
          {/* Wrestling Style*/}
          <FormControl margin="normal" width={1}>
            <TextField
              label="Wrestling Style"
              id="wrestling_style"
              name="wrestling_style"
              select
              onChange={e => this.onChange(e)}
              value={wrestling_style}
              helperText="Please select the wrestling wrestling level"
              margin="normal"
            >
              {wrestlingStyles.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          {/* Wrestling Level*/}
          <FormControl margin="normal" width={1}>
            <TextField
              label="Wrestling Level"
              id="wrestling_level"
              name="wrestling_level"
              select
              onChange={e => this.onChange(e)}
              value={wrestling_level}
              helperText="Please the level of the wrestling tournament"
              margin="normal"
            >
              {wrestlingLevel.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          {/* Tournament Flier*/}
          <FormControl margin="normal">
            <InputLabel>Tournament Flier</InputLabel>
            <Input
              name="tournament_flier"
              id="tournament_flier"
              type="file"
              onChange={e => this.onChange(e)}
            />
          </FormControl>
          {/* Tournament Logo*/}
          <FormControl margin="normal">
            <InputLabel>Tournament Logo</InputLabel>
            <Input
              name="tournament_logo"
              id="tournament_logo"
              type="file"
              onChange={e => this.onChange(e)}
            />
          </FormControl>
          <FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              m={3}
              onClick={this.onsubmit}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Container>
    );
  }
}
export default App;
