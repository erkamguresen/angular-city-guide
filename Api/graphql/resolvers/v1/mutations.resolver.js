const accountManager = require('../../../bussiness-logic/account.manager.js');
const cityManager = require('../../../bussiness-logic/city.manager.js');

const mutationsResolver = {
  registerUser: ({ user }) => {
    return accountManager.registerUser(user);
  },
  addCity: ({ city }) => {
    return cityManager.addCity(city);
  },
};

module.exports = mutationsResolver;
