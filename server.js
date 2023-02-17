// Create the GraphQL server and wire up the schema and resolvers.
// This code creates a new ApolloServer instance, passing in the schema and resolvers we defined earlier.

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}${server.graphqlPath}`);
});
