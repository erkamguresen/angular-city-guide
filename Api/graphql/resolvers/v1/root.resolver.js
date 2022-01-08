const queriesResolver = require('./queries.resolver.js');
const mutationsResolver = require('./mutations.resolver.js');

const rootResolver = {
  hello: () => {
    console.log('Hello World!');
    return 'Hello World!';
  },
  sayHello: ({ name }) => {
    // console.log("here's the name:", name);
    return `Hello ${name}`;
  },
  sayHello2: ({ user }) => {
    // console.log("here's the user:", user);
    return `Hello ${user.username}`;
  },
  ...queriesResolver,
  ...mutationsResolver,
};

module.exports = rootResolver;
