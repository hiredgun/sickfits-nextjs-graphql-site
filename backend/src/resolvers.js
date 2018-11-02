module.exports = {
  Mutation: {
    createUser(root, args, { prisma }) {
      return prisma.createUser({
        name: args.name,
        surname: args.surname,
      });
    },
  },
  Query: {
    user(root, args, { prisma }) {
      return prisma.user({ id: args.userID });
    },
    users(root, args, { prisma }) {
      return prisma.users();
    },
  },
};
