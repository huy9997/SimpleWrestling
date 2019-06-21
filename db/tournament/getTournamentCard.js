const db = require("../connection");

const getTournamentCardData = value => {
  const GET_TOURNAMENT_CARD_DATA = `SELECT id, tournament_start_date, tournament_end_date, tournament_logo FROM  tournament where id=$1 `;
  return db.query(GET_TOURNAMENT_CARD_DATA, value);
};

module.exports = getTournamentCardData;
