const db = require("../connection");

const getTournamentSignUps = value => {
  const GET_TOURNAMENT_SIGNUPS = `SELECT user_wrestler_id FROM UserSignUpTournament where tournament_id=$1 and tournament_weight_class=$2`;
  return db.query(GET_TOURNAMENT_SIGNUPS, value);
};

module.exports = getTournamentSignUps;
