const helper = require("../helper/response");
const {
  deleteService,
  getAllService,
  createService,
  updateservice,
  searchservice,
} = require("../services/businessesService");
exports.getAll = async (req, res) => {
  try {
    const businesses = await getAllService();

    return helper.successResponse(res, "succes", businesses);
  } catch (err) {
    return res.status(500).json(console.log("ini eror", err));
  }
};

exports.create = async (req, res) => {
  try {
    const businesses = await createService(req.body);
    return helper.successResponse(res, "succes create businesses", businesses);
  } catch (err) {
    return res.status(500).json(console.log("ini eror create", err));
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const businesses = await updateservice(id, newData);
    return helper.successResponse(res, "succes", businesses);
  } catch (err) {
    return res.status(500).json(console.log("ini eror update", err));
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteService(id);

    return helper.successResponse(res, "Success Delete Product with Id");
  } catch (err) {
    return res.status(500).json(console.log("ini eror delete", err));
  }
};

exports.search = async (req, res) => {
  try {
    const { query, location } = req.query;
    console.log(req.query);

    const Business = await searchservice(query, location);

    if (Business.length > 0) {
      return helper.successResponse(res, "Search results", Business);
    } else {
      return helper.successResponse(
        res,
        "No businesses found matching the search criteria",
        []
      );
    }
  } catch (err) {
    return res.status(500).json(console.log("ini eror search", err));
  }
};
