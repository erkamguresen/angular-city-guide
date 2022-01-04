const express = require('express');
const accountController = require('../controllers/account.controller.js');

const accountsRoute = express.Router();

accountsRoute.use((req, res, next) => {
  console.log('api! Register route');
  next();
});

accountsRoute.post('/register', accountController.postRegister);

// TODO
// registerRoute.post('/login', registerController.postLogin);

module.exports = accountsRoute;
