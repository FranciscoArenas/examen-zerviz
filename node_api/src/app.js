const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const healthRoutes = require("./routes/health");
const authRoutes = require("./routes/auth");
const { setupDocs } = require("./routes/docs");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use("/health", healthRoutes);
app.use("/auth", authRoutes);

setupDocs(app);

module.exports = { app };
