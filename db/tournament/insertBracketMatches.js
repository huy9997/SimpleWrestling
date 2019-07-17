const db = require("../connection");

const insertBracketMatches = value => {
  const INSERT_BRACKET_MATCHES = `INSERT INTO bracketmatches (wrestler1_id,wrestler2_id,bracket_position,bout_number,weight_class_id, tournament_id) VALUES($1,$2,$3,$4,$5,$6)`;
  return db.query(INSERT_BRACKET_MATCHES, value);
};

module.exports = insertBracketMatches;
