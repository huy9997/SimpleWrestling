const CREATE_COACH = `INSERT INTO coach (coach_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

const CREATE_USER = `INSERT INTO user (user_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

const CREATE_ADMIN = `INSERT INTO admin (admin_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

export default (CREATE_COACH, CREATE_ADMIN, CREATE_USER);
