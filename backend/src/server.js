const { Prisma } = require('prisma-binding');
const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  // secret: 'mysecret123',
  // debug: true,
});

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma,
  }),
});

server.start(
  {
    cors: {
      credentials: true,
      origin: 'http://localhost:3000',
    },
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
