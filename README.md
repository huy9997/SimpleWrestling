# SimpleWrestling

Technologies used:

Frontend:
React.js

Backend:
Node.js
Express

Database:
Postgres

How to install the dependencies:

install npm modules in client: 1. cd into client 2. npm install
install npm modules for the node server: 1. npm install
3.How to setup .env folder:
create a .env folder with the following content with your postgres credentials
`
NODE_ENV=development

DB_DEV_HOST=
DB_DEV_USER=
DB_DEV_DATABASE=
DB_DEV_PASSWORD=

SESSION_SECRET=SECRET

`

How to run the development project:

Run Frontend

1. cd into client
2. npm start

Run Backend

1. create sql tables to test postgres locally

- cd db/sql_queries/sql_tables.sql
- run those sql queries to have working tables

2. run "node index2.js" in the root of the project
