const db = require("../connection");

const getTournamentBrackets = value => {
  const GET_TOURNAMENT_BRACKETS = `SELECT * FROM bracketmatches WHERE tournament_id=$1 AND weight_class_id=$2`;
  return db.query(GET_TOURNAMENT_BRACKETS, value);
};

module.exports = getTournamentBrackets;
