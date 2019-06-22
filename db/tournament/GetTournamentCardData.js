const db = require("../connection");

const getTournamentCardData = value => {
  const GET_TOURNAMENT_CARD_DATA = `SELECT id, name, tournament_start_date, tournament_end_date, tournament_logo FROM tournament GROUP BY id LIMIT 5 `;
  return db.query(GET_TOURNAMENT_CARD_DATA, value);
};

module.exports = getTournamentCardData;
