const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    dialect: "mysql",
  }
);

module.exports = sequelize;
