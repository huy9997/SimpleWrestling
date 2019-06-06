const db = require("../connection");

const tournamentSignUp = value => {
  const SIGNUP_FOR_TOURNAMENT = `INSERT INTO usersignuptournament (
    seeding_notes,
    userWrestler_id,
    tournament_id
    ) 
    VALUES($1,$2,$3);`;
  return db.query(SIGNUP_FOR_TOURNAMENT, value);
};

module.exports = tournamentSignUp;
