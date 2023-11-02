const Businesses = require("./businesses");
const Categories = require("./categories");
const Coordinates = require("./coordinates");
const Location = require("./location");
const BusinessesCategories = require("./businessesCategories");

const model = {};
model.Businesses = Businesses;
model.Categories = Categories;
model.Coordinates = Coordinates;
model.Location = Location;
model.BusinessesCategories = BusinessesCategories;

module.exports = model;
