// const { Sequelize, DataTypes } = require("sequelize");
const { Sequelize } = require("../config/db");
const db = require("../config/db");

const Location = db.define("location", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address1: {
    type: Sequelize.STRING,
  },
  address2: {
    type: Sequelize.STRING,
  },
  address3: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  zip_code: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
});
module.exports = Location;
