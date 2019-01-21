const { GraphQLServer } = require('graphql-yoga');

const db = require('./db');
const Query = require('./resolvers/Queries');
const Mutation = require('./resolvers/Mutations');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: { Query, Mutation },
    context: req => ({ ...req, db }),
    resolverValidationOptions: { requireResolversForResolveType: false },
  });
}

module.exports = createServer;
