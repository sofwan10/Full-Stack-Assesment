// Implement the resolvers for the GraphQL schema.
// These resolvers use Knex.js to query the PostgreSQL database and return the appropriate data.

const knex = require('knex')({
    client: 'pg',
    connection: {
      database: 'merchants',
    },
  });
  
  const resolvers = {
    Query: {
      merchants: async (parent, { page = 1, per_page = 10, sort_by = 'id', sort_order = 'asc' }) => {
        const offset = (page - 1) * per_page;
        const merchants = await knex('merchants')
          .orderBy(sort_by, sort_order)
          .offset(offset)
          .limit(per_page);
        return merchants;
      },
      merchant: async (parent, { id }) => {
        const merchant = await knex('merchants').where({ id }).first();
        return merchant;
      },
    },
  
    Mutation: {
      createMerchant: async (parent, { name, latitude, longitude }) => {
        const merchant = await knex('merchants').insert({ name, latitude, longitude }).returning('*');
        return merchant[0];
      },
      updateMerchant: async (parent, { id, name, latitude, longitude, is_active }) => {
        const updates = { name, latitude, longitude, is_active };
        const merchant = await knex('merchants').where({ id }).update(updates).returning('*');
        return merchant[0];
      },
      toggleMerchantsActive: async (parent, { ids }) => {
        const merchants = await knex('merchants').whereIn('id', ids);
        const updates = { is_active: knex.raw('NOT is_active') };
        const updatedMerchants = await knex('merchants').whereIn('id', ids).update(updates).returning('*');
        return updatedMerchants;
      },
    },
  };
  
  module.exports = resolvers;
  