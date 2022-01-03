const accountManager = require('../bussiness-logic/account.manager.js');

const accountController = {
  postRegister: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        birthday,
        email,
        username,
        password,
        isAdmin,
      } = req.body;

      const result = await accountManager.register(
        firstName,
        lastName,
        email,
        isAdmin,
        birthday,
        username,
        password
      );
      res.status(200).json(result);
    } catch (error) {
      if (error.message === 'User already exists') {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },
};

module.exports = accountController;
