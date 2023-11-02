const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "200799",
  database: "62Teknologi",
  port: 5432,
});

module.exports = db;
