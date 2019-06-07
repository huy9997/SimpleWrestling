const db = require("../connection");

const getAllWrestlersSignedUp = value => {
  const WRESTLERS_SIGNED_UP = `SELECT * FROM usersignuptournament WHERE tournament_id= $1`;
  return db.query(WRESTLERS_SIGNED_UP, value);
};

module.exports = getAllWrestlersSignedUp;
