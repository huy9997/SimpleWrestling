const connect = require("../connection");

const createUser = values => {
  const CREATE_USER = `INSERT INTO users (
    first_name,
    last_name,
    email,
    password,
    date_of_birth,
    team,address,
    type_of_account,
    active
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id`;
  return connect.query(CREATE_USER, values);
};

module.exports = createUser;
