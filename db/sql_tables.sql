CREATE TABLE "user"
(
  "id" SERIAL UNIQUE,
  "first_name" varchar NOT NULL,
  "last_name" varchar,
  "email" varchar UNIQUE,
  "password" varchar,
  "date_of_birth" date,
  "team" VARCHAR,
  "address" VARCHAR,
  "weight_class" INTEGER,
  "type_of_account" VARCHAR

);