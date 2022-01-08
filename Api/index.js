'use strict';

const express = require('express');
const unauthenticatedGraphqlRouter = require('./routers/unauthenticatedGraphqlRouter.js');

const accountRoutes = require('./routes/account.routes.js');
// const loginRoute = require('./routes/login');
// const authenticateUser = require('./middleware/authenticate');
// const userRoutes = require('./routes/users');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API! welcome to `/api`');
});

router.use('/v1', unauthenticatedGraphqlRouter);

//register
// router.use('/accounts/', accountRoutes);

// login
// router.use('/login', loginRoute);

// authentication with token
// router.use('/users/:userId', authenticateUser);

// router.use('/v2', authenticatedGraphqlRouter);

module.exports = router;
