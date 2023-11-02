const model = require("../model");
const Op = require("sequelize").Op;
exports.getAllService = async () => {
  try {
    const businesses = await model.Businesses.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: model.Categories,
          as: "categories",
        },
        {
          model: model.Coordinates,
          as: "coordinates",
          attributes: ["latitude", "longitude"],
        },
        {
          model: model.Location,
          as: "location",
        },
      ],
      order: [["id", "ASC"]],
    });
    return businesses;
  } catch (err) {
    return err;
  }
};

exports.createService = async (data) => {
  try {
    const businesses = await model.Businesses.create(data);
    return businesses;
  } catch (err) {
    return err;
  }
};

exports.deleteService = async (id) => {
  try {
    await model.Businesses.destroy({
      where: { id: id },
    });
    return true;
  } catch (err) {
    throw err;
  }
};

exports.updateservice = async (id, newData) => {
  try {
    const businesses = await model.Businesses.update(newData, {
      where: { id: id },
    });

    const getBusinesses = await model.Businesses.findOne({
      where: { id: id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return { businesses, getBusinesses };
  } catch (err) {
    throw err;
  }
};

exports.searchservice = async (query, location) => {
  try {
    const Business = await model.Businesses.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },

      include: [
        {
          model: model.Categories,
          as: "categories",
        },
        {
          model: model.Coordinates,
          as: "coordinates",
          attributes: ["latitude", "longitude"],
        },
        {
          model: model.Location,
          as: "location",
        },
      ],
      order: [["id", "ASC"]],
    });
    return Business;
  } catch (err) {
    throw err;
  }
};
