const connect = require("../connection");

const coachSignup = (
  first_name,
  last_name,
  email,
  password,
  dob,
  team,
  hometown
) => {
  const CREATE_COACH = `INSERT INTO coach (first_name, last_name, email,password,dob,team,hometown,weightclass) VALUES ($1, $2, $3,$4,$5,$6,$7,$8) RETURNING admin_name`;
  return connect.query(CREATE_COACH, [
    first_name,
    last_name,
    email,
    password,
    dob,
    team,
    hometown
  ]);
};

export default coachSignup;
