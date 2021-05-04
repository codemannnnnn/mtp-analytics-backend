exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          firstName: "Bailey",
          lastName: "Branson",
          email: "bailey@bailey.com",
          workPhone: 1111111111,
          cellPhone: 2222222222,
          title: "Account Manager",
        },
        {
          id: 2,
          firstName: "Kade",
          lastName: "Branson",
          email: "kade@kade.com",
          workPhone: 3333333333,
          cellPhone: 4444444444,
          title: "Account Manager",
        },
        {
          id: 3,
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
