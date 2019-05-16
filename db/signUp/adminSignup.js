const connect = require("../connection");

const adminSignup = values => {
  const CREATE_ADMIN = `INSERT INTO admin (first_name, last_name, email,password,dob,team,hometown,weightclass) VALUES ($1, $2, $3,$4,$5,$6,$7,$8) RETURNING admin_name`;
  return connect.query(CREATE_ADMIN, values);
};

export default adminSignup;
