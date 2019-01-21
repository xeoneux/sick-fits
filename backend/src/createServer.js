const { GraphQLServer } = require('graphql-yoga');

const db = require('./db');
const Queries = require('./resolvers/Queries');
const Mutations = require('./resolvers/Mutations');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    context: req => ({ ...req, db }),
    resolvers: { Queries, Mutations },
    resolverValidationOptions: { requireResolversForResolveType: false },
  });
}

module.exports = createServer;
