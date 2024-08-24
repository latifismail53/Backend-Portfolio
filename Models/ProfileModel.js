// define squelize model
const Sequelize = require("sequelize");
// define database
const db = require("../Config/Database");

// type define table
const Profile = db.define(
  "my_profile",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    initials: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.TEXT,
    },
    location: {
      type: Sequelize.TEXT,
    },
    locationLink: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
    summary: {
      type: Sequelize.TEXT,
    },
    avatarUrl: {
      type: Sequelize.TEXT,
    },
  },
  {
    freezeTableName: true,
    tableName: "my_profile",
    createdAt: true,
    updatedAt: "updateTimestamp",
  }
);

module.exports = Profile;
