const db = require("../connection");

const searchAdminEmail = value => {
  const SEARCH_FOR_UNIQUE_EMAIL = `SELECT * FROM useradmin WHERE email = $1`;
  return db.query(SEARCH_FOR_UNIQUE_EMAIL, value);
};

module.exports = searchAdminEmail;
