// define squelize model
const Sequelize = require("sequelize");
// define database
const db = require("../Config/Database");

// type define table
module.exports = db.define(
  "my_work",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    href: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    badges: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    logoUrl: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    start: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    end: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "my_work",
    createdAt: true,
    updatedAt: "updateTimestamp",
  }
);
