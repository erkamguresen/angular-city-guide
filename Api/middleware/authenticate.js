const { validateToken } = require('../utils/jwToken');

const authenticateUser = function (req, res, next) {
  const tokenHeader = req.headers.authorization;
  const userId = req.params.userId;

  if (!tokenHeader || !userId) {
    return res.status(401).send({
      message: 'Unauthorized',
    });
  }

  const tokenArray = tokenHeader.split(' ').filter((x) => x);

  if (tokenArray[0] !== 'Bearer' || tokenArray.length !== 2) {
    return res.status(401).send({
      message: 'Unauthorized',
    });
  }

  const token = tokenArray[1];

  const isValid = validateToken(token, userId);

  if (isValid) {
    next();
  } else {
    return res.status(401).send({
      message: 'Unauthorized',
    });
  }
};

module.exports = authenticateUser;
