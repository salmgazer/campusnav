exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username').unique().notNullable();
      table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
    })
  ]);
};


exports.down = function(knex, Promise) {  
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};
