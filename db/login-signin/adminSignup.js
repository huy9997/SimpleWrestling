const connect = require("../connection");

const adminSignup = (
  first_name,
  last_name,
  email,
  password,
  dob,
  team,
  hometown
) => {
  const CREATE_ADMIN = `INSERT INTO admin (first_name, last_name, email,password,dob,team,hometown) VALUES ($1, $2, $3,$4,$5,$6,$7) RETURNING admin_name`;
  return connect.query(CREATE_ADMIN, [
    first_name,
    last_name,
    email,
    password,
    dob,
    team,
    hometown
  ]);
};

export default adminSignup;
