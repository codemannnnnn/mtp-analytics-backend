exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("id");
      tbl.string("username").notNullable().unique();
      tbl.string("password").notNullable();
      tbl.string("firstName").notNullable();
      tbl.string("lastName").notNullable();
      tbl.string("email").notNullable().unique();
      tbl.bigInteger("workPhone");
      tbl.bigInteger("cellPhone");
      tbl.string("title");
    })
    .createTable("customers", (tbl) => {
      tbl.increments("id");
      tbl.string("businessName").notNullable().unique();
      tbl.string("businessEmail");
      tbl.string("businessAddress");
      tbl.string("businessCity");
      tbl.string("businessState");
      tbl.bigInteger("businessZip");
      tbl.string("businessPhone");
      tbl.string("businessPoc");
      tbl.bigInteger("phoneLines");
      tbl.bigInteger("phoneLinesMonthlyCost");
      tbl.string("phoneLinesProvider");
      tbl.bigInteger("internetMonthlyCost");
      tbl.string("internetProvider");
      tbl.bigInteger("deskPhoneTotal");
      tbl.string("deskPhoneMake");
      tbl.bigInteger("videoConferencingMonthlyCost");
      tbl.string("videoConferencingProvider");
      tbl.bigInteger("longDistanceMonthlyCost");
      tbl.string("longDistanceProvider");
      tbl.bigInteger("tollFreeMonthlyCost");
      tbl.string("tollFreeProvider");
      tbl.bigInteger("phoneSystemMaintenanceMonthlyCost");
      tbl.string("phoneSystemMaintenanceProvider");
      tbl
        .bigInteger("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customers").dropTableIfExists("users");
};
