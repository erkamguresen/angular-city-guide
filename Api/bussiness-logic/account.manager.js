const dataAccess = require('../data-access/mongodbAccess');

const usersStore = dataAccess('Users');

const hashPassword = require('../utils/hashPassword');

const salt = process.env.SALT_SECRET;

const accountManager = {
  register: async function (
    firstName,
    lastName,
    username,
    email,
    birthday,
    password,
    isAdmin
  ) {
    const hashedPassword = hashPassword(`${email}.${password}.${salt}`);

    const user = {
      firstName,
      lastName,
      username: username,
      email,
      birthday,
      hashedPassword: hashedPassword,
      isAdmin,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // TODO check if user already exists
    const registeredUsers = await usersStore.getAll({
      username: username,
      hashedPassword: hashedPassword,
    });

    const existingUser = registeredUsers.find(
      (user) => user.username === username
    );

    if (existingUser) {
      throw new Error('User already exists');
    }

    const response = await usersStore.insert(user);

    if (response.insertedCount === 0) {
      throw new Error('User could not be created');
    }

    return { username, email };
  },
};

module.exports = accountManager;
