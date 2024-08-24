// define squelize model
const { Sequelize } = require("sequelize");

// define database
const db = require("../Config/Database");

module.exports = db.define(
  "my_sosmed",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
    },
    icon: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    tableName: "my_sosmed",
    createdAt: true,
    updatedAt: "updateTimestamp",
  }
);
