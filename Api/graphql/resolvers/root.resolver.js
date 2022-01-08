const accountController = require('../../controllers/account.controller.js');

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
    console.log(user);
    console.log("here's the name:", user.username, user.email, user.password);
    return accountController.postRegister(user);
    // return { username, email };
  },
};

module.exports = rootResolver;
