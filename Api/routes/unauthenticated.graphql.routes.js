const express = require('express');

const { graphqlHTTP } = require('express-graphql');

const schema = require('../graphql/schemas/schema.v1.js');
const rootResolver = require('../graphql/resolvers/root.resolver.js');

const unauthenticatedGraphqlRouter = express.Router();

unauthenticatedGraphqlRouter.use((req, res, next) => {
  console.log('api! unauthenticated GraphQL route');
  next();
});

unauthenticatedGraphqlRouter.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
  })
);

module.exports = unauthenticatedGraphqlRouter;
