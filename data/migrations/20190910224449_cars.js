// change we want to make
exports.up = function(knex) {
  // table cars
  return knex.schema.createTable("cars", tbl => {
    // id, pk, auto-increment, integer
    tbl.increments(); //defaults to ID
    // model, string, not null (required)
    tbl.string("model", 128).notNullable();
    // make, integer, unique, not null (required)
    tbl
      .integer("make")
      .unique()
      .notNullable();
    // vin, integer, unique, not null (required)
    tbl
      .integer("vin")
      .unique()
      .notNullable();
    // mileage, string, not null (required)
    tbl.integer("mileage").notNullable();
  });
};
// to revert changes from the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
