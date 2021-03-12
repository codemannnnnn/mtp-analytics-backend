exports.up = function (knex) {
  return knex.schema
    .createTable("example", (tbl) => {
      tbl.string("id").notNullable().unique().primary();
      tbl.string("firstname");
      tbl.string("lastname");
      tbl.string("email");
    })

    .createTable("users", function (table) {
      table.string("id").notNullable().unique().primary();
      table.string("firstname");
      table.string("lastname");
      table.string("email");
      table.string("avatarUrl");
      table.string("name");
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("example");
};
