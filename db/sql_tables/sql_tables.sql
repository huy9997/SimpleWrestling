CREATE TABLE Users
(
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR NOT NULL,
  "last_name" VARCHAR,
  "email" VARCHAR UNIQUE,
  "password" VARCHAR,
  "date_of_birth" DATE,
  "team" VARCHAR,
  "address" VARCHAR,
  "weight_class" INTEGER,
  "type_of_account" VARCHAR,
  "active" BOOLEAN
);

CREATE TABLE UserWrestler
(
  "id" SERIAL PRIMARY KEY,
  "weight_class" INTEGER,
  "wins" INTEGER,
  "losses" INTEGER,
  "user_account" INTEGER REFERENCES Users(id)
);

CREATE TABLE Tournament
(
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR,
  "location" VARCHAR,
  "description" VARCHAR,
  "tournament_start_date" DATE,
  "tournament_end_date" DATE,
  "wrestling_style" VARCHAR,
  "wrestling_level" VARCHAR,
  "tournament_flier" VARCHAR,
  "tournament_logo" VARCHAR,
  "admin_account" INTEGER REFERENCES Users(id)
);

CREATE TABLE UserSignUpTournament
(
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR,
  "weight_class" INTEGER,
  "seeding_notes" VARCHAR,
  "user_approved" BOOLEAN,
  "user_id" INTEGER REFERENCES UserWrestler(id),
  "tournament_id" INTEGER REFERENCES Tournament(id)
);
CREATE TABLE BracketMatches
(
  "id" SERIAL PRIMARY KEY,
  "bout_number" INTEGER,
  "wrestler1_name" VARCHAR,
  "wrestler1_previous_match_score" VARCHAR,
  "wrestler1_record" VARCHAR,
  "wrestler2_name" VARCHAR,
  "wrestler2_previous_match_score" VARCHAR,
  "wrestler2_record" VARCHAR,
  "tournament_id" INTEGER REFERENCES Tournament(id)
);

CREATE TABLE BracketResults
(
  "id" SERIAL PRIMARY KEY,
  "wrestler1_score" INTEGER,
  "wrestler2_score" INTEGER,
  "bout_number" INTEGER REFERENCES BracketMatches(id)
);
