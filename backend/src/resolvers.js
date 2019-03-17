const { forwardTo } = require('prisma-binding');

module.exports = {
  Mutation: {
    createUser: forwardTo('prisma'),
    updateUser: forwardTo('prisma'),
    deleteUser: forwardTo('prisma'),
  },
  Query: {
    user: forwardTo('prisma'),
    users: forwardTo('prisma'),
  },
};
