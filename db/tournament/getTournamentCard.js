const db = require("../connection");

const getTournamentCardData = value => {
  const GET_TOURNAMENT_CARD_DATA = ``;
  return db.query(GET_TOURNAMENT_CARD_DATA, value);
};

module.exports = getTournamentCardData;
