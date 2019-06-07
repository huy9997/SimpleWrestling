const db = require("../connection");

const tournamentSignUp = value => {
  const SIGNUP_FOR_TOURNAMENT = `INSERT INTO usersignuptournament (
    seeding_notes,
    tournament_weight_class,
    user_wrestler_id,
    tournament_id
    ) 
    VALUES($1,$2,$3,$4);`;
  return db.query(SIGNUP_FOR_TOURNAMENT, value);
};

module.exports = tournamentSignUp;
