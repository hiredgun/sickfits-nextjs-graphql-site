const { forwardTo } = require('prisma-binding');

module.exports = {
  Mutation: {
    createUser(root, args, { prisma }) {
      return prisma.createUser({
        name: args.name,
        email: args.email,
      });
    },
  },
  Query: {
    user: forwardTo('prisma'),
    users(root, args, { prisma }) {
      return prisma.users();
    },
  },
};
