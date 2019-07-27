const db = require("../../connection");

const insertWeightClass = value => {
  const INSERT_WEIGHT_CLASS = `INSERT INTO weightclasses (
    weight_class,
    tournament_id
    ) 
    VALUES($1,$2);`;
  return db.query(INSERT_WEIGHT_CLASS, value);
};

module.exports = insertWeightClass;
