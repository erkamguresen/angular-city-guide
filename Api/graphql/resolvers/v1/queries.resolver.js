const accountManager = require('../../../bussiness-logic/account.manager.js');
const cityManager = require('../../../bussiness-logic/city.manager.js');

const queriesResolver = {
  loginUser: ({ email, password }) => {
    return accountManager.loginUser(email, password);
  },
  cities: () => {
    return cityManager.getCities();
  },
};

module.exports = queriesResolver;
