# Backend API PostgresDB MTP

### Postgres DB and PGAdmin containers included in docker-compose.yml file

### Express to serve the API routes

### Docker running two containers

- pg-starter
- pgadmin

### PGAdmin Default Login

- HOST: localhost:5050
- USERNAME: admin@admin.com
- PASSWORD: admin

### Postgres Connection

- HOST: pg
- PORT: 5432
- USER: docker
- PASSWORD: docker
- DATABASE: postgresdb

#### Starting Info

Starting the database and pgadmin

- docker-compose up -d

Migrations

- npm i
- knex migrate:make <example_tbl>
- knex migrate:latest

Starting local dev server

- npm run server

DOTENV file

- DATABASE_URL=postgres://docker:docker@127.0.0.1:5400/postgresdb
- PORT=8005

#### Cloning repo & creating new repo

- git clone https://github.com/codemannnnnn/api-init.git
- create new repo on github
- git remote set-url origin http://github.com/YOU/YOUR_REPO
- push new changes to new repo
