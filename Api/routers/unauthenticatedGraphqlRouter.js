const express = require('express');

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const unauthenticatedGraphqlRouter = express.Router();

const schema = buildSchema(`
  type Query {
    hello: String!,
    sayHello (name: String!): String!,
  }
`);

const rootResolver = {
  hello: () => {
    console.log('Hello World!');
    return 'Hello World!';
  },
  sayHello: ({ name }) => {
    console.log("here's the name:", name);
    return `Hello ${name}`;
  },
};

unauthenticatedGraphqlRouter.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
  })
);

unauthenticatedGraphqlRouter.use((req, res, next) => {
  console.log('api! unauthenticated GraphQL route');
  next();
});

module.exports = unauthenticatedGraphqlRouter;
