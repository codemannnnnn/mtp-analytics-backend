exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "bay",
          password: "pass",
          firstName: "Bailey",
          lastName: "Branson",
          email: "bailey@bailey.com",
          workPhone: 1111111111,
          cellPhone: 2222222222,
          title: "Account Manager",
        },
        {
          id: 2,
          username: "Test2",
          password: "password",
          firstName: "Kade",
          lastName: "Branson",
          email: "kade@kade.com",
          workPhone: 3333333333,
          cellPhone: 4444444444,
          title: "Account Manager",
        },
        {
          id: 3,
          username: "Test3",
          password: "password",
          firstName: "Jayme",
          lastName: "Branson",
          email: "jayme@jayme.com",
          workPhone: 5555555555,
          cellPhone: 6666666666,
          title: "Owner",
        },
      ]);
    });
};
