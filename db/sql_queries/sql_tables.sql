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
  "type_of_account" VARCHAR,
);

CREATE TABLE UserWrestler
(
  "id" SERIAL PRIMARY KEY,
  "weight_class" INTEGER,
  "wins" INTEGER,
  "losses" INTEGER,
  "user_account" INTEGER REFERENCES Users(id)
);

CREATE TABLE UserAdmin
(
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR NOT NULL,
  "last_name" VARCHAR,
  "email" VARCHAR UNIQUE,
  "password" VARCHAR,
  "date_of_birth" DATE,
  "address" VARCHAR,
  "type_of_account" VARCHAR,
);

CREATE TABLE UserWrestler
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
  "wins" INTEGER,
  "losses" INTEGER,
  "active" BOOLEAN,
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
  "active" BOOLEAN,
  "admin_account" INTEGER REFERENCES Users(id)
);

CREATE TABLE UserSignUpTournament
(
  "id" SERIAL PRIMARY KEY,
  "seeding_notes" VARCHAR,
  "user_id" INTEGER REFERENCES UserWrestler(id),
  "tournament_id" INTEGER REFERENCES Tournament(id)
);
CREATE TABLE BracketMatches
(
  "id" SERIAL PRIMARY KEY,
  "wrestler1_id" INTEGER,
  "wrestler2_id" INTEGER,
  "tournament_id" INTEGER REFERENCES Tournament(id)
);

CREATE TABLE BracketMatchResults
(
  "id" SERIAL PRIMARY KEY,
  "wrestler1_score" INTEGER,
  "wrestler2_score" INTEGER,
  "bout_number" INTEGER REFERENCES BracketMatches(id)
);
