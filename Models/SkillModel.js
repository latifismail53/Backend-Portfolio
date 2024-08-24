// define squelize model
const Sequelize = require("sequelize");
// define database
const db = require("../Config/Database");

// type define table
module.exports = db.define(
  "my_skill",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "my_skill",
    createdAt: true,
    updatedAt: "updateTimestamp",
  }
);
