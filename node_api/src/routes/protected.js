const { Router } = require("express");
const { getProfileFromToken } = require("../application/usecases/getProfileFromToken");

const router = Router();

router.get("/profile", (req, res) => {
  const header = req.headers.authorization || "";
  const token = header.split(" ").pop();

  try {
    const profile = getProfileFromToken(token);
    res.json(profile);
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

module.exports = router;
