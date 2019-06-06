const connect = require("../connection");

const createAdmin = values => {
  const CREATE_ADMIN = `INSERT INTO useradmin (
    first_name,
    last_name,
    email,
    password,
    date_of_birth,
    address,
    type_of_account,
    active
    ) VALUES ($1,$2,$3,$4,$5,$6,$7)`;
  return connect.query(CREATE_ADMIN, values);
};

module.exports = createAdmin;
