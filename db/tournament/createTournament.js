const db = require("../connection");

const createTournament = value => {
  const CREATE_TOURNAMENT = `INSERT INTO tournament (
    name,
    location,
    description,
    tournament_start_date,
    tournament_end_date,
    wrestling_style,
    wrestling_level,
    tournament_flier,
    tournament_logo,
    active,
    admin_account,
    ) 
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`;
  return db.query(CREATE_TOURNAMENT, value);
};

module.exports = createTournament;
