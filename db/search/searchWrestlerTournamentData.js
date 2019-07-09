const db = require("../connection");

const searchWrestlerTournamentData = value => {
  const SEARCH_WRESTLER_TOURNAMENT_DATA = `SELECT first_name,last_name, team, wins,losses,grade from userwrestler where id=$1`;
  return db.query(SEARCH_WRESTLER_TOURNAMENT_DATA, value);
};

module.exports = searchWrestlerTournamentData;
