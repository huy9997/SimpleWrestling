const connect = require("../connection");

const createWrestler = values => {
  const CREATE_USERWRESTLER = `INSERT INTO userwrestler (
    first_name,
    last_name,
    email,
    password,
    date_of_birth,
    address,
    team,
    weight_class,
    wins,
    losses,
    type_of_account,
    active
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`;
  return connect.query(CREATE_USERWRESTLER, values);
};

module.exports = createWrestler;
