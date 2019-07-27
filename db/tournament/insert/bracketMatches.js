const db = require("../../connection");

const insertBracketMatches = value => {
  const INSERT_BRACKET_MATCHES = `INSERT INTO bracketmatches (
    weight_class,
    tournament_wrestler_rank,
    wrestler_bracket_position,
    wrestler_name,
    wrestler_high_school,
    wrestler_record,
    wrestler_grade,
    tournament_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8)`;
  return db.query(INSERT_BRACKET_MATCHES, value);
};

module.exports = insertBracketMatches;
