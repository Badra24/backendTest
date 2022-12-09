const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const generateToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });

  return token;
};

const verifyToken = (token) => {
  const isVerified = jwt.verify(token, JWT_SECRET);
  console.log(isVerified);
  return isVerified;
};

module.exports = {
  generateToken,
  verifyToken,
};
