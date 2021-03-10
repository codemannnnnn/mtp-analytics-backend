// Sample Seed for Users tables
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Pratik Agashe",
          email: "pratik@heady.io",
          password: "pratik",
        },
      ]);
    });
};

// Sample Seed for Posts tables
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 1,
          title: "Sample blog",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum mi purus, dignissim faucibus lectus pulvinar vitae.",
          user_id: 1,
        },
      ]);
    });
};
