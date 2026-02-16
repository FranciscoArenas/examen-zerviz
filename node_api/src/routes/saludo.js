const express = require("express");
const router = express.Router();

router.get("/saludo", (req, res) => {
  res.status(200).json({ mensaje: "Hola desde mi API" });
});

router.post("/adios", (req, res) => {
  const { nombre } = req.body;
  res.status(200).json({ mensaje: `Adiós, ${nombre}!` });
});

module.exports = router;
