const accountManager = require('../../bussiness-logic/account.manager.js');

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
  createUser: ({ user }) => {
    return accountManager.registerUser(user);
  },
};

module.exports = rootResolver;
