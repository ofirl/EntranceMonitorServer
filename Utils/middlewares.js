const jwt = require('jsonwebtoken');

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

// Checks if a user is logged in
const accessProtectionMiddleware = (req, res, next) => {
  let auth = req.get("authorization");
  auth = auth.split(' ');
  if (auth.length == 2)
    auth = auth[1];
  else {
    return res.status(403).json({
      message: 'must be logged in to continue',
    });
  }

  let decoded;
  try {
    req.user = jwt.verify(auth, process.env.JWT_SIGN_SECRET);
  } catch (err) {
    // err
  }

  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).json({
      message: 'must be logged in to continue',
    });
  }
};

const emailExtract = (fn) => {
  return async (req, res) => {
      let email = req.user.user;
      return await fn(email, req, res);
  };
};

module.exports = {
    asyncMiddleware,
    accessProtectionMiddleware,
    emailExtract
}