// define squelize model
const Sequelize = require("sequelize");
// define database
const db = require("../Config/Database");

// type define table
module.exports = db.define(
  "my_education",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    school: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    href: {
      type: Sequelize.INTEGER,
    },
    degree: {
      type: Sequelize.INTEGER,
    },
    logoUrl: {
      type: Sequelize.INTEGER,
    },
    start: {
      type: Sequelize.YEAR,
    },
    end: {
      type: Sequelize.YEAR,
    },
  },
  {
    freezeTableName: true,
    tableName: "my_education",
    createdAt: true,
    updatedAt: "updateTimestamp",
  }
);
