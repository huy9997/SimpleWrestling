const Pool = require("pg").Pool;
const pgp = require("pg-promise")();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD
});
const connection = pgp(pool);
export default connection;
