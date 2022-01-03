'use strict';

const express = require('express');

const accountRoutes = require('./routes/account.routes.js');
// const loginRoute = require('./routes/login');
// const authenticateUser = require('./middleware/authenticate');
// const userRoutes = require('./routes/users');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API! welcome to `/api`');
});

//register
router.use('/account/', accountRoutes);

// login
// router.use('/login', loginRoute);

// authentication with token
// router.use('/users/:userId', authenticateUser);

// use routes
// router.use('/users', userRoutes);

module.exports = router;
