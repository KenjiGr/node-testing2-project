
exports.up = function(knex) {
  return knex.schema.createTable('anime', tbl => {
      tbl.increments('anime_id');
      tbl.string('name', 255).unique().notNullable();
      tbl.boolean('watched').defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('anime');
};
