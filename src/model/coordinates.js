const { Sequelize } = require("../config/db");
const db = require("../config/db");

const Coordinate = db.define("coordinates", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  latitude: {
    type: Sequelize.STRING,
  },
  longitude: {
    type: Sequelize.STRING,
  },
});

module.exports = Coordinate;
