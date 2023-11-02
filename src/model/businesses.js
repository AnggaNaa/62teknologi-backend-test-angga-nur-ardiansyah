const Sequelize = require("sequelize");
const db = require("../config/db");
const Categories = require("./categories");
const Coordinate = require("./coordinates");
const Location = require("./location");

const Business = db.define("businesses", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
  },
  alias: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  image_url: {
    type: Sequelize.STRING,
  },
  is_closed: {
    type: Sequelize.BOOLEAN,
  },
  url: {
    type: Sequelize.STRING,
  },
  review_count: {
    type: Sequelize.INTEGER,
  },
  rating: {
    type: Sequelize.FLOAT,
  },
  price: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  display_phone: {
    type: Sequelize.STRING,
  },
  distance: {
    type: Sequelize.FLOAT,
  },

  transactions: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },

  category_id: {
    type: Sequelize.INTEGER,
    references: {
      model: "categories",
      key: "id",
    },
  },

  coordinate_id: {
    type: Sequelize.INTEGER,
    references: {
      model: "coordinates",
      key: "id",
    },
  },

  location_id: {
    type: Sequelize.STRING,
    references: {
      model: "location",
      key: "id",
    },
  },
});

// Business.belongsToMany(Categories, {
//   through: "businessesCategories",
//   // foreignKey: "business_id",
// });

Business.belongsTo(Categories, {
  foreignKey: "category_id",
  as: "categories",
});

Business.belongsTo(Coordinate, {
  foreignKey: "coordinate_id",
  as: "coordinates",
});

Business.belongsTo(Location, {
  foreignKey: "location_id",
  as: "location",
});
// Business.hasMany(Categories, {
//   foreignKey: "business_id",
// });

// Business.associations = () => {
// Business.belongsToMany(Categories, {
//   through: BusinessesCategories,
//   foreignKey: {
//     name: "business_id",
//   },
//   as: "categories",
// });
// };

module.exports = Business;
