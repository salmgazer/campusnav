

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('locations', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable().unique();
      table.string('gpsCode');
      table.string('description');
      table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
    })
  ]);
};


exports.down = function(knex, Promise) {  
  return Promise.all([
      knex.schema.dropTable('locations')
  ]);
};



