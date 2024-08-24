// define squelize model
const Sequelize = require("sequelize");
// define database
const db = require("../Config/Database");

// type define table
module.exports = db.define(
  "my_contact",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tel: {
      type: Sequelize.INTEGER,
    },
    social_id: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
    tableName: "my_contact",
    createdAt: true,
    updatedAt: "updateTimestamp",
  }
);
