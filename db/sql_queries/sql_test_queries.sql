/*create a user*/
INSERT INTO users
  ("first_name","last_name","email","password","date_of_birth","team","address","type_of_account","active")
VALUES('Jimmy', 'Smith', 'email1@email.com', 'password', '2/2/2', 'wildcats', '1533 14th Street SF, CA', 'wrestler', true)
/* create a wrestler */
INSERT INTO userwrestler
  ("user_account","weight_class","wins","losses")
VALUES
  (1, 125, 2, 2)
/* create a tournament*/
INSERT INTO tournament
  (
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
  admin_account
  )
VALUES('wildcat Rumble', 'dvhs', 'this dv wrestling', '4/4/2019', '4/4/2019', 'folkstyle', 'jv', 'www.link.com', 'www.link.com', true, 4);
/* get userWrestler id */
SELECT userwrestler.id
FROM userwrestler
  INNER JOIN users ON
  users.id = userwrestler.user_account
WHERE users.id =12 
;
