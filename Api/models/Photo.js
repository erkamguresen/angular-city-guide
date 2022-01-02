const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true,
  },
  isMain: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minLength: 5,
    maxLength: 2000,
  },
  publicId: {
    type: String,
    required: true,
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
});

module.exports = mongoose.model('Photo', photoSchema); //db collection is automatically 'photos'
