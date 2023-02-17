// Define the GraphQL schema for the merchants API.
// I've added the toggleMerchantsActive mutation, which takes an array of merchant IDs and returns an array of updated merchants.

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Merchant {
    id: ID!
    name: String!
    latitude: Float!
    longitude: Float!
    is_active: Boolean!
    recorded_date_time: String!
  }

  type Query {
    merchants(page: Int, per_page: Int, sort_by: String, sort_order: String): [Merchant!]!
    merchant(id: ID!): Merchant!
  }

  type Mutation {
    createMerchant(name: String!, latitude: Float!, longitude: Float!): Merchant!
    updateMerchant(id: ID!, name: String, latitude: Float, longitude: Float, is_active: Boolean): Merchant!
    toggleMerchantsActive(ids: [ID!]!): [Merchant!]!
  }
`;

module.exports = typeDefs;
