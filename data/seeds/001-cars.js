exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate() //resets the ID primary key
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { model: "Jeep Cherokee", make: 2017, vin: 00123123, mileage: 75000 },
        { model: "Tesla Model S", make: 2019, vin: 00456456, mileage: 70 }
      ]);
    });
};
