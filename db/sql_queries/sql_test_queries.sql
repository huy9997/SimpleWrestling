

INSERT INTO  users
  ("first_name","last_name","email","password","date_of_birth","team","address","weight_class","type_of_account","active")
VALUES('Jimmy', 'Smith', 'email1@email.com', 'password', '2/2/2', 'wildcats', '1533 14th Street SF, CA', 125, 'wrestler', true)

INSERT INTO userwrestler
  ("user_account","weight_class","wins","losses")
VALUES
  (1, 125, 2, 2)

INSERT INTO tournament
  ("name","location","description","tournament_start_date","tournament_end_date","wrestling_style","wrestling_level","tournament_flier","tournament_logo","admin_account")
VALUES
  ('Wildcats tournament', 'Dougherty Valley High School', 'This is the description', '2/2/2', '3/2/2', 'folkstyle', 'varsity', 'flier_doc', 'logo', 4)

