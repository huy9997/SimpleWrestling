const db = require("../../connection");

const insertMatchResults = value => {
  const INSERT_MATCH_RESULTS = `INSERT INTO bracketmatchresults (
    wrestler1_score,
    wrestler2_score,
    bracket_match_id
    ) 
    VALUES($1,$2,$3);`;
  return db.query(INSERT_MATCH_RESULTS, value);
};

module.exports = insertMatchResults;
