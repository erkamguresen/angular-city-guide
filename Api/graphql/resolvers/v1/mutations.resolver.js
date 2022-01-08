const accountManager = require('../../../bussiness-logic/account.manager.js');

const mutationsResolver = {
  createUser: ({ user }) => {
    return accountManager.registerUser(user);
  },
};

module.exports = mutationsResolver;
