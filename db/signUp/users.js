const connect = require("../connection");

const userSignup = (
  first_name,
  last_name,
  email,
  password,
  date_of_birth,
  team,
  hometown,
  weightClass,
  typeOfAccount
) => {
  const CREATE_USER = `INSERT INTO user (first_name, last_name, email,password,date_of_birth,team,address,weight_class,type_of_account)VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9)`;
  return connect.query(CREATE_USER, [
    first_name,
    last_name,
    email,
    password,
    date_of_birth,
    team,
    hometown,
    weightClass,
    typeOfAccount
  ]);
};

module.exports = userSignup;
