const express = require('express');
const accountController = require('../controllers/account.controller.js');

const registerRoute = express.Router();

registerRoute.use((req, res, next) => {
  console.log('api! Register route');
  next();
});

registerRoute.post('/register', accountController.postRegister);

// TODO
registerRoute.post('/login', registerController.postLogin);

module.exports = registerRoute;
