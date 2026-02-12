const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const healthRoutes = require("./routes/health");
const protectedRoutes = require("./routes/protected");
const railsRoutes = require("./routes/rails");
const { setupDocs } = require("./routes/docs");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use("/health", healthRoutes);
app.use("/protected", protectedRoutes);
app.use("/rails", railsRoutes);

setupDocs(app);

module.exports = { app };
