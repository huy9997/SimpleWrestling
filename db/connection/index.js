const pgp = require("pg-promise")();

const connection = {
  host: process.env.DB_DEV_HOST,
  database: process.env.DB_DEV_DATABASE,
  user: process.env.DB_DEV_USER
};

const db = pgp(connection);
module.exports = db;
