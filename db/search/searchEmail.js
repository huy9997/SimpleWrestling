const db = require("../connection");

const searchEmail = value => {
  const SEARCH_FOR_UNIQUE_EMAIL = `SELECT * FROM coaches WHERE email = $1`;
  return db.query(SEARCH_FOR_UNIQUE_EMAI, value);
};

export default searchEmail;
