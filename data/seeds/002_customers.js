exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("customers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("customers").insert([
        {
          id: 1,
          businessName: "Walmart",
          businessEmail: "walmart@walmart.com",
          businessAddress: "123 West Ave",
          businessCity: 'Missoula',
          businessState: 'Montana',
          businessZip: 59801
          businessPhone: 1111111111,
          businessPoc: "John Doe",
          phoneLines: 30,
          phoneLinesMonthlyCost: 2000,
          phoneLinesProvider: "Blackfoot",
          internetMonthlyCost: 300,
          internetProvider: "Blackfoot",
          deskPhoneTotal: 100,
          deskPhoneMake: "Avaya",
          videoConferencingMonthlyCost: 200,
          videoConferencingProvider: "Zoom",
          longDistanceMonthlyCost: 400,
          longDistanceProvider: "Blackfoot",
          tollFreeMonthlyCost: 100,
          tollFreeProvider: "Blackfoot",
          phoneSystemMaintenanceMonthlyCost: 250,
          phoneSystemMaintenanceProvider: "Blackfoot",
          user_id: 1,
        },
        {
          id: 2,
          businessName: "Target",
          businessEmail: "target@target.com",
          businessAddress: "123 East Ave",
          businessPhone: 1111111111,
          businessPoc: "John Doe",
          phoneLines: 150,
          phoneLinesMonthlyCost: 2500,
          phoneLinesProvider: "Montana Phone",
          internetMonthlyCost: 700,
          internetProvider: "CenturyLink",
          deskPhoneTotal: 199,
          deskPhoneMake: "Toshiba",
          videoConferencingMonthlyCost: 200,
          videoConferencingProvider: "Skype",
          longDistanceMonthlyCost: 300,
          longDistanceProvider: "CenturyLink",
          tollFreeMonthlyCost: 103,
          tollFreeProvider: "CenturyLink",
          phoneSystemMaintenanceMonthlyCost: 400,
          phoneSystemMaintenanceProvider: "CenturyLink",
          user_id: 2,
        },
        {
          id: 3,
          businessName: "Cabelas",
          businessEmail: "cabelas@cabelas.com",
          businessAddress: "123 South Ave",
          businessPhone: 1111111111,
          businessPoc: "John Doe",
          phoneLines: 10,
          phoneLinesMonthlyCost: 600,
          phoneLinesProvider: "Spectrum",
          internetMonthlyCost: 400,
          internetProvider: "Spectrum",
          deskPhoneTotal: 30,
          deskPhoneMake: "Cisco",
          videoConferencingMonthlyCost: 100,
          videoConferencingProvider: "Zoom",
          longDistanceMonthlyCost: 120,
          longDistanceProvider: "Spectrum",
          tollFreeMonthlyCost: 80,
          tollFreeProvider: "Spectrum",
          phoneSystemMaintenanceMonthlyCost: 120,
          phoneSystemMaintenanceProvider: "Spectrum",
          user_id: 3,
        },
      ]);
    });
};
