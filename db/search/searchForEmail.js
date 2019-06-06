const db = require("../connection");

const searchEmail = value => {
  const SEARCH_FOR_UNIQUE_EMAIL = `
  SELECT email,password,first_name,last_name,date_of_birth,type_of_account,active FROM userwrestler 
  	where email= $1
  UNION
  SELECT email,password,first_name,last_name,date_of_birth,type_of_account,active FROM useradmin 
    where email= $1
  `;
  return db.query(SEARCH_FOR_UNIQUE_EMAIL, value);
};

module.exports = searchEmail;
