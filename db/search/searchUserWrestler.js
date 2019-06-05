const db = require("../connection");

const searchUserWrestler = value => {
  const SEARCH_FOR_USER_WRESTLER = `
  SELECT userwrestler.id
    FROM userwrestler 
    INNER JOIN users ON
    users.id = userwrestler.user_account
  WHERE users.id =($1);
`;
  return db.query(SEARCH_FOR_USER_WRESTLER, value);
};

module.exports = searchUserWrestler;
