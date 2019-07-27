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
  "active" BOOLEAN
);

CREATE TABLE UserWrestler
(
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR NOT NULL,
  "last_name" VARCHAR,
  "email" VARCHAR UNIQUE,
  "password" VARCHAR,
  "date_of_birth" DATE,
  "address" VARCHAR,
  "team" VARCHAR,
  "weight_class" INTEGER,
  "wins" INTEGER,
  "losses" INTEGER,
  "grade" VARCHAR,
  "type_of_account" VARCHAR,
  "active" BOOLEAN
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
  "admin_account" INTEGER REFERENCES UserAdmin(id)
);

CREATE TABLE UserSignUpTournament
(
  "id" SERIAL PRIMARY KEY,
  "seeding_notes" VARCHAR,
  "tournament_weight_class" INTEGER,
  "user_wrestler_id" INTEGER REFERENCES UserWrestler(id) UNIQUE,
  "tournament_id" INTEGER REFERENCES Tournament(id)
);

CREATE TABLE WeightClasses
(
  "id" SERIAL PRIMARY KEY,
  "weight_class" INTEGER UNIQUE,
  "tournament_id" INTEGER REFERENCES Tournament(id)
);

CREATE TABLE BracketMatches
(
  "id" SERIAL PRIMARY KEY,
  "wrestler1_id" INTEGER UNIQUE,
  "wrestler2_id" INTEGER UNIQUE,
  "wrestler1_bracket_position" INTEGER,
  "wrestler2_bracket_position" INTEGER,
  "bout_number" INTEGER,
  "weight_class_id" INTEGER REFERENCES WeightClasses(id),
  "tournament_id" INTEGER REFERENCES Tournament(id)
);

CREATE TABLE BracketMatches
(
  "id" SERIAL PRIMARY KEY,
  "weight_class" INTEGER,
  "tournament_wrestler_rank" INTEGER,
  "wrestler_bracket_position" INTEGER,
  "wrestler_name" VARCHAR,
  "wrestler_high_school" VARCHAR,
  "wrestler_record" VARCHAR,
  "wrestler_grade" INTEGER,
  "tournament_id" INTEGER REFERENCES Tournament(id)
);

CREATE TABLE BracketMatchResults
(
  "id" SERIAL PRIMARY KEY,
  "wrestler1_score" INTEGER UNIQUE,
  "wrestler2_score" INTEGER UNIQUE,
  "bracket_match_id" INTEGER REFERENCES BracketMatches(id)
);
