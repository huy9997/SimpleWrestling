const db = require("../connection");

const getWrestlerBracket = value => {
  const GET_WRESTLER_BRACKETS = `SELECT * FROM UserSignUpTournament`;
  return db.query(GET_WRESTLER_BRACKETS, value);
};

module.exports = getWrestlerBracket;
