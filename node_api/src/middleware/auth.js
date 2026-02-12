const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/config");

function authMiddleware(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.split(" ").pop();

  try {
    const payload = jwt.verify(token, jwtSecret);
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}

module.exports = { authMiddleware };
