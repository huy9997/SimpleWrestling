const connect = require("../connection");

const userSignup = (
  first_name,
  last_name,
  email,
  password,
  dob,
  team,
  hometown,
  weightClass
) => {
  const CREATE_USER = `INSERT INTO users (first_name, last_name, email,password,dob,team,hometown,weightclass,usertype) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9)`;
  return connect.query(CREATE_WRESTLER, [
    first_name,
    last_name,
    email,
    password,
    dob,
    team,
    hometown,
    weightClass,
    usertype
  ]);
};

export default wrestlerSignup;
