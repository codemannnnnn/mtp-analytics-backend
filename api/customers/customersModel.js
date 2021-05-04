const db = require("../../data/knex.js");

const findAll = async () => {
  return await db("customers").select("*");
};

const findBy = (filter) => {
  return db("customers").where(filter);
};

const findById = (id) => {
  return db("customers").where({ id }).first().select("*");
};

const create = (ex) => {
  return db("customers").insert(ex).returning("*");
};

const update = (id, ex) => {
  return db("customers").where({ id: id }).first().update(ex).returning("*");
};

const remove = (id) => {
  return db("customers").where({ id }).del();
};

module.exports = {
  findAll,
  findBy,
  findById,
  create,
  update,
  remove,
};
