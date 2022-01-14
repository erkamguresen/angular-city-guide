const City = require('../models/City');

const cityManager = {
  getCities: () => {
    return City.find({})
      .then((cities) => {
        return cities;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
};

module.exports = cityManager;
