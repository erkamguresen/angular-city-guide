const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/tokens');

function createToken(user) {
  const payload = {
    iss: 'Hack Your Future Belgium',
    userId: `${user._id}`,
    username: `${user.username}`,
    email: `${user.email}`,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1),
  };

  const token = jwt.sign(payload, JWT_SECRET);

  return token;
}

function validateToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    console.log('Token decoded: ', decoded);

    if (decoded.exp > Date.now()) {
      return true;
    } else {
      throw new Error('Invalid token');
    }
  } catch (error) {
    return false;
  }
}

module.exports = { createToken, validateToken };
