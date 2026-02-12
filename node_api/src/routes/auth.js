const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { User } = require("../models");
const { jwtSecret } = require("../config/config");

const router = Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ email, passwordHash: hash });
    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: "24h" });
    res.status(201).json({ token });
  } catch (error) {
    res.status(422).json({ error: "User creation failed" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const matches = await bcrypt.compare(password, user.passwordHash);
  if (!matches) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: "24h" });
  return res.json({ token });
});

module.exports = router;
