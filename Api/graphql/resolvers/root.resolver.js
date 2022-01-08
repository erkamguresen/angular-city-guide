const rootResolver = {
  hello: () => {
    console.log('Hello World!');
    return 'Hello World!';
  },
  sayHello: ({ name }) => {
    console.log("here's the name:", name);
    return `Hello ${name}`;
  },
  sayHello2: ({ user }) => {
    console.log("here's the user:", user);
    return `Hello ${user.username}`;
  },
  createUser: ({ username, email, password }) => {
    console.log("here's the name:", username, email, password);
    return {
      username: username,
      email: email,
      password: password,
    };
  },
};

module.exports = rootResolver;
