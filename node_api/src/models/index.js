const { Sequelize } = require("sequelize");
const { databaseUrl } = require("../config/config");

const sequelize = new Sequelize(databaseUrl, {
  logging: false
});

const User = require("./user")(sequelize);

module.exports = { sequelize, User };
