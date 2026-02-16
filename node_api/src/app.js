const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const healthRoutes = require("./routes/health");
const protectedRoutes = require("./routes/protected");
const railsRoutes = require("./routes/rails");
const authRoutes = require("./routes/auth");
const saludoRoutes = require("./routes/saludo");
const { setupDocs } = require("./routes/docs");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// CORS middleware - must be before routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use("/health", healthRoutes);
app.use("/protected", protectedRoutes);
app.use("/rails", railsRoutes);
app.use("/auth", authRoutes);
app.use("/", saludoRoutes);

setupDocs(app);

module.exports = { app };
