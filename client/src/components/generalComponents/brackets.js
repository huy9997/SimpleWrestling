import React, { useState, useEffect } from "react";
import axios from "axios";
function Brackets(tournamentID) {
  // Declare a new state variable, which we'll call "count"
  useEffect(() => {
    axios
      .get("/tournament", {
        params: {
          tournament_id: 1,
          weight_class_id: 125
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  return <div>hello world</div>;
}

export default Brackets;
