const City = require('../models/City');
const Photo = require('../models/Photo');

const cityManager = {
  getCities: () => {
    return City.find({})
      .then((cities) => {
        return cities.map(async (city) => {
          const photos = await Photo.find({ cityId: city._id });

          city.photos = photos;

          return city;
        });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
  getCity: ({ id }) => {
    return City.findById(id)
      .then(async (city) => {
        const photos = await Photo.find({ cityId: id });
        city.photos = photos;

        return city;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
  addCity: (city) => {
    const newCity = new City({
      name: city.name,
      description: city.description,
      country: city.country,
      countryCode: city.countryCode,
      userId: city.userId,
      url: city.url,
    });

    return newCity
      .save()
      .then((city) => {
        console.log('city added', city);
        return city;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
};

module.exports = cityManager;
