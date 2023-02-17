// Create the merchants table.
// This code uses Knex.js to create the "merchants" table with the required fields.
// This will create the "merchants" table in the "merchants" database.

const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'merchants',
  },
});

knex.schema.createTable('merchants', (table) => {
  table.increments('id');
  table.string('name');
  table.decimal('latitude');
  table.decimal('longitude');
  table.boolean('is_active').defaultTo(false);
  table.timestamp('recorded_date_time').defaultTo(knex.fn.now());
}).then(() => {
  console.log('Merchants table created');
  process.exit();
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
