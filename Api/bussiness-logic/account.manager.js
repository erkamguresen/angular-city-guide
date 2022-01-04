// const dataAccess = require('../data-access/mongodbAccess');

// const usersStore = dataAccess('Users');

const User = require('../models/User');
const hashPassword = require('../utils/hashPassword');

const salt = process.env.SALT_SECRET;

const accountManager = {
  register: async function (
    firstName,
    lastName,
    email,
    isAdmin,
    birthday,
    username,
    password
  ) {
    // TODO check email and password regex
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
    console.log(user);

    // const userInDB = await User.findOne({ email: user.email });

    // console.log(userInDB);

    // console.log('user in db', user);
    // if (userInDB) {
    //   req.session.errorMessage = 'This user already exists.';
    //   req.session.save((err) => {
    //     if (err) next(err);
    //     return res.redirect('/register');
    //   });
    // }
    // const registeredUsers = await usersStore.getAll({
    //   username: username,
    //   hashedPassword: hashedPassword,
    // });

    // const existingUser = registeredUsers.find(
    //   (user) => user.username === username
    // );

    // if (existingUser) {
    //   throw new Error('User already exists');
    // }

    // const response = await usersStore.insert(user);

    // if (response.insertedCount === 0) {
    //   throw new Error('User could not be created');
    // }

    // return { username, email };

    const newUser = new User(user);

    console.log(newUser);

    try {
      return newUser.save().then((result) => {
        console.log('User created');
        return result;
      });
    } catch (err) {
      console.log('Error creating user', err);
    }
  },
};

module.exports = accountManager;
