const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/config");

function getProfileFromToken(token) {
  const payload = jwt.verify(token, jwtSecret);
  return {
    userId: payload.user_id || payload.userId,
    email: payload.email,
    issuedAt: payload.iat,
    expiresAt: payload.exp
  };
}

module.exports = { getProfileFromToken };
