const db = require("../connection");

const getWeightClassBouts = value => {
  const GET_ALL_BOUTS_FOR_A_WEIGHTCLASS = `SELECT * FROM bracketmatches WHERE tournament_id=$1 AND weight_class_id=$2;`;
  return db.query(GET_ALL_BOUTS_FOR_A_WEIGHTCLASS, value);
};

module.exports = getWeightClassBouts;
