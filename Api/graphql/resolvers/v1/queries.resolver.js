const accountManager = require('../../../bussiness-logic/account.manager.js');

const queriesResolver = {
  loginUser: ({ email, password }) => {
    return accountManager.loginUser(email, password);
  },
};

module.exports = queriesResolver;
