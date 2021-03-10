# Backend API template using Postgres DB

### Postgres DB and PGAdmin containers included in docker-compose.yml file

### Express to serve the API routes.

### Docker running two containers.

- pg-starter
- pgadmin

### PGAdmin Default Login

- HOST: localhost:5050
- USERNAME: admin@admin.com
- PASSWORD: admin

### Postgres Connection

- HOST: pg
- USER: docker
- PORT: 5432
- PASSWORD: docker
- DATABASE: postgresdb

#### Starting Info

npm i
knex migrate:make <example_tbl>
knex migrate:latest
