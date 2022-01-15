const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    minLength: 5,
    maxLength: 2000,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  countryCode: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 10,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model('City', citySchema); //db collection is automatically 'cities'

// list of all photos of the city
