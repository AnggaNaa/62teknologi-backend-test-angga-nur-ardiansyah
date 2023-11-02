// const Sequelize = require("sequelize");
// const db = require("../config/db");
// const Categories = require("./categories");
// const Business = require("./businesses");

// const BusinessesCategories = db.define("businessesCategories", {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   business_id: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: Business,
//       key: "id",
//     },
//   },
//   category_id: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: Categories,
//       key: "id",
//     },
//   },
// });

// Business.belongsToMany(Categories, {
//   through: BusinessesCategories,
//   foreignKey: "business_id",
// });
// Categories.belongsToMany(Business, {
//   through: BusinessesCategories,
//   foreignKey: "category_id",
// });

// // BusinessesCategoreis.associations = () => {
// // BusinessesCategories.belongsTo(Categories, {
// //   as: "categories",
// //   foreignKey: {
// //     name: "category_id",
// //   },
// // });
// // };
// // BusinessesCategories.belongsTo(Business, {
// //   as: "businesses",
// //   foreignKey: {
// //     name: "business_id",
// //   },
// // });

// (module.exports = BusinessesCategories), Business, Categories;
