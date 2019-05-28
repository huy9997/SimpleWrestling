const Pool = require("pg").Pool;
const pgp = require("pg-promise")();

const connection = {
  host: process.env.DB_DEV_HOST,
  port: process.env.DB_DEV_PORT,
  database: process.env.DB_DEV_DATABASE,
  user: process.env.DB_DEV_USER,
  password: process.env.DB_DEV_PASSWORD
};

const db = pgp(connection);
module.exports = db;
