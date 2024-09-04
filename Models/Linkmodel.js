// define squelize model
const Sequelize = require("sequelize");
// define database
const db = require("../Config/Database");

// type define table
module.exports = db.define(
  "aff_links",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    tableName: "aff_links",
    createdAt: true,
    updatedAt: "updateTimestamp",
  }
);
