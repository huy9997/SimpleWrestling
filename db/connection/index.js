const Pool = require("pg").Pool;
const pgp = require("pg-promise")();

const pool = new Pool({
  host: process.env.DB_DEV_HOST,
  user: process.env.DB_DEV_USER,
  database: process.env.DB_DEV_DATABASE,
  password: process.env.DB_DEV_PASSWORD
});
const connection = pgp(pool);
module.exports = connection;
