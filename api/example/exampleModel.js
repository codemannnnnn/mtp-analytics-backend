const db = require("../../data/knex.js");

const findAll = async () => {
  return await db("example").select("*");
};

const findBy = (filter) => {
  return db("contexts").where(filter);
};

const findById = (id) => {
  return db("example").where({ id }).first().select("*");
};

const create = (ex) => {
  return db("example").insert(ex).returning("*");
};

const update = (id, ex) => {
  return db("example").where({ id: id }).first().update(ex).returning("*");
};

const remove = (id) => {
  return db("example").where({ id }).del();
};

module.exports = {
  findAll,
  findBy,
  findById,
  create,
  update,
  remove,
};
