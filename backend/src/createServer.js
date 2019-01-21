const { GraphQLServer } = require('graphql-yoga');

const db = require('./db');
const Query = require('./resolvers/Queries');
const Mutation = require('./resolvers/Mutations');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    context: req => ({ ...req, db }),
    resolvers: { Query, Mutation },
    resolverValidationOptions: { requireResolversForResolveType: false },
  });
}

module.exports = createServer;
