const db = require("../connection");

const searchTournament = value => {
  const SEARCH_TOURNAMENT = `
    SELECT name,tournament_start_date,tournament_logo FROM tournament where name like $1 LIMIT 9;
  `;
  return db.query(SEARCH_TOURNAMENT, value);
};

module.exports = searchTournament;
