const User = require('../models/User');
const hashPassword = require('../utils/hashPassword');

const salt = process.env.SALT_SECRET;
const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const passwordRegexp = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

const accountManager = {
  registerUser: async (user) => {
    const { email, password } = user;

    console.log('manager: registerUser');
    if (emailRegexp.test(email) === false) {
      throw new Error('Invalid email');
    }

    if (passwordRegexp.test(password) === false) {
      throw new Error(
        'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter and one number '
      );
    }

    const hashedPassword = hashPassword(`${email}.${password}.${salt}`);

    user = {
      ...user,
      hashedPassword: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    console.log(user);

    const userInDB = await User.findOne({ email: user.email });

    // console.log(userInDB);

    console.log('user in db', userInDB);
    if (userInDB) {
      throw new Error('User already exists');
    }

    const newUser = new User(user);

    console.log(newUser);

    try {
      return newUser.save().then((result) => {
        console.log('User created', result);
        return {
          username: result.username,
          email: result.email,
        };
      });
    } catch (err) {
      console.log('Error creating user', err);
    }
  },

  loginUser: (email, password) => {
    console.log('manager: loginUser');
    return User.findOne({ email: email }).then((user) => {
      console.log('user', user);
      if (!user) {
        throw new Error('User not found');
      }

      if (
        user.hashedPassword !== hashPassword(`${email}.${password}.${salt}`)
      ) {
        throw new Error('Invalid password');
      }

      // TODO return actual token
      return 'this is the token';
    });
  },
};

module.exports = accountManager;
