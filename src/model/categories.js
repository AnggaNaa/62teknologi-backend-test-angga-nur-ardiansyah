const Sequelize = require("sequelize");
const db = require("../config/db");
// const Business = require("./businesses");
const Business = require("./businesses");
const BusinessesCategories = require("./businessesCategories");

const Categories = db.define("categories", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
  },
  alias: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
});

// Categories.belongsToMany(Business, {
//   through: "businessesCategories",
//   // foreignKey: "category_id",
// });

// Categories.associations = () => {
// Categories.belongsToMany(Businesses, {
//   through: BusinessesCategories,
//   foreignKey: "category_id",
//   as: "businesses",
// });
// };
// Categories.belongsToMany(Businesses, {
//   foreignKey: "category_id",
// });
module.exports = Categories;
