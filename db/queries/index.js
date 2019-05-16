const CREATE_COACH = `INSERT INTO coaches (coach_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

const CREATE_USER = `INSERT INTO USER (coach_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

const CREATE_ADMIN = `INSERT INTO ADMIN (coach_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

export default (CREATE_COACH, CREATE_ADMIN, CREATE_USER);
