const connect = require("../connection");

const wrestlerSignup = (
  first_name,
  last_name,
  email,
  password,
  dob,
  team,
  hometown,
  weightClass
) => {
  const CREATE_WRESTLER = `INSERT INTO admin (first_name, last_name, email,password,dob,team,hometown,weightClass) VALUES ($1, $2, $3,$4,$5,$6,$7,$8) RETURNING admin_name`;
  return connect.query(CREATE_WRESTLER, [
    first_name,
    last_name,
    email,
    password,
    dob,
    team,
    hometown,
    weightClass
  ]);
};

export default wrestlerSignup;
