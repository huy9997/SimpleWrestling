const db = require("../connection");

const getTournamentLevel = value => {
  const GET_TOURNAMENT_LEVEL = `SELECT wrestling_level from tournament where id=$1`;
  return db.query(GET_TOURNAMENT_LEVEL, value);
};

module.exports = getTournamentLevel;
