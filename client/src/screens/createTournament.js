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
      tournament_logo: ""
    };
  }
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onsubmit = e => {
    axios
      .post("api/createtournament", {
        name: this.state.name,
        location: this.state.location,
        description: this.state.description,
        tournament_start_date: this.state.tournament_start_date,
        tournament_end_date: this.state.tournament_end_date,
        wrestling_style: this.state.wrestling_style,
        wrestling_level: this.state.wrestling_level
      })
      .then(response => {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error, "error");
      });
  };

  render() {
    return (
      <Container component="main" maxWidth="xl" width="75%">
        <Box mt={8} display="flex" flexDirection="column" alignItems="center">
          {/* Tournament Name*/}
          <FormControl margin="normal" width={1}>
            <InputLabel>Tournament Name</InputLabel>
            <Input id="tournament_name" onChange={onchange} />
          </FormControl>
          {/* Location Name*/}
          <FormControl margin="normal" width={1}>
            <InputLabel>Location</InputLabel>
            <Input id="location_name" onChange={onchange} />
          </FormControl>
          {/* Description */}
          <FormControl margin="normal">
            <InputLabel>Description</InputLabel>
            <Input id="description" onChange={onchange} />
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
              name="tournament_start_date "
              onChange={e => this.onchange(e)}
            />
          </FormControl>
          {/* tournament_end_date */}
          <FormControl margin="normal" width={1}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Tournament End Date"
              id="tournament_end_date  "
              name="tournament_end_date  "
              onChange={e => this.onchange(e)}
            />
          </FormControl>
          {/* Wrestling Style*/}
          <FormControl margin="normal" width={1}>
            <InputLabel>Wrestling Style</InputLabel>
            <TextField
              id="wrestling_style"
              name="wrestling_style"
              select
              onChange={e => this.onChange(e)}
              value={this.state.type_of_account}
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
            <InputLabel>Wrestling level</InputLabel>
            <TextField
              id="wrestling_level"
              name="wrestling_level"
              select
              onChange={e => this.onChange(e)}
              value={this.state.type_of_account}
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
            <Input id="tournament_flier" type="file" onChange={onchange} />
          </FormControl>
          {/* Tournament Logo*/}
          <FormControl margin="normal">
            <InputLabel>Tournament Logo</InputLabel>
            <Input id="tournament_logo" type="file" onChange={onchange} />
          </FormControl>
        </Box>
      </Container>
    );
  }
}
export default App;
