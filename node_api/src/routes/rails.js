const { Router } = require("express");
const { getRailsHealth } = require("../application/usecases/getRailsHealth");

const router = Router();

router.get("/health", async (req, res) => {
  try {
    const data = await getRailsHealth();
    res.json(data);
  } catch (error) {
    res.status(502).json({ error: "Rails API unavailable" });
  }
});

module.exports = router;
