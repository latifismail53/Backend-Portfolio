const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "portofolio_solartower",
  "portofolio_solartower",
  "4abd6163c124fc92388d6d1136943e6d0dbf5919",
  {
    host: "iku.h.filess.io",
    port: "3307",
    dialect: "mysql",
  }
);

module.exports = sequelize;
