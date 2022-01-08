const accountManager = require('../bussiness-logic/account.manager.js');

const accountController = {
  postRegister: async (user) => {
    console.log('controller: postRegister');
    const registeredUser = await accountManager.registerUser(user);

    return registeredUser;
  },
  // postRegister: async (req, res) => {
  //   console.log('controller');

  //   try {
  //     const {
  //       firstName,
  //       lastName,
  //       birthday,
  //       email,
  //       username,
  //       password,
  //       isAdmin,
  //     } = req.body;

  //     const result = await accountManager.register(
  //       firstName,
  //       lastName,
  //       email,
  //       isAdmin,
  //       birthday,
  //       username,
  //       password
  //     );
  //     res.status(200).json(result);
  //   } catch (error) {
  //     if (error.message === 'User already exists') {
  //       res.json({ error: error.message });
  //     } else {
  //       res.status(500).json({ error: error.message });
  //     }
  //   }
  // },
};

module.exports = accountController;
