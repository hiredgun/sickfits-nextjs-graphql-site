const { prisma } = require('./services/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

server.start(({ port }) =>
  console.log('Server started' + ' localhost ' + port)
);
