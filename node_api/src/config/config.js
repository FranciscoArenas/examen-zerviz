require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3001,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET || "dev_secret",
  railsApiUrl: process.env.RAILS_API_URL || "http://localhost:3000"
};
