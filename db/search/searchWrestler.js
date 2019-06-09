const db = require("../connection");

const searchWrestler = value => {
  const SEARCH_FOR_WRESTLER = `SELECT * FROM userwrestler WHERE id = $1`;
  return db.query(SEARCH_FOR_WRESTLER, value);
};

module.exports = searchWrestler;
