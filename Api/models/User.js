const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail, 'Invalid Email'],
  },
  birthday: {
    type: Date,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  resetToken: String,
  resetTokenExpiration: Date,
  emailVerificationToken: String,
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', userSchema); //db collection is automatically 'users'
