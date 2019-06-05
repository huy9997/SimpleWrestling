const connect = require("../connection");

const userSignup = values => {
  const CREATE_USERWRESTLER = `INSERT INTO userwrestler (
    weight_class,
    wins,
    losses,
    user_account
     ) VALUES ($1,$2,$3,$4)`;
  return connect.query(CREATE_USERWRESTLER, values);
};

module.exports = userSignup;
