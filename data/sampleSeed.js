// Sample Seed for Users table
const faker = require("faker");

const users = [...new Array(5)].map((i, idx) => ({
  id: idx === 0 ? "00ulthapbErVUwVJy4x6" : faker.random.alphaNumeric(20),
  firstname: idx === 0 ? "FirstName001" : `${faker.name.firstName()}`,
  lastname: idx === 0 ? "LastName001" : `${faker.name.lastName()}`,
  avatarUrl: faker.image.avatar(),
  email: idx === 0 ? 'llama001@maildrop.cc"' : faker.internet.email(),
}));

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(users);
    });
};

// Sample Seed for Example table
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("example")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("example").insert([
        {
          id: 1,
          firstname: "cody",
          lastname: "noway",
          email: "cody@example.com",
        },
        {
          id: 2,
          firstname: "archie",
          lastname: "tryagain",
          email: "cody@example.com",
        },
        {
          id: 3,
          firstname: "daisy",
          lastname: "notavailable",
          email: "cody@example.com",
        },
      ]);
    });
};
