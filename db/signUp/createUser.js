const connect = require("../connection");

const userSignup = values => {
  const CREATE_USER = `INSERT INTO users (
    first_name,
    last_name,
     email,
     password,
     date_of_birth,
     team,address,
     weight_class,
     type_of_account,
     active
     ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`;
  return connect.query(CREATE_USER, values);
};

module.exports = userSignup;
