const NameModel = require("../models/name_model");
const Validator = require("node-input-validator");
// ===========================================================================================================
// -----------------------------------------------signUp------------------------------------------------------
exports.saveName = async (req, res, next) => {
  const validator = new Validator.Validator(req.body, {
    name: "required",
  });

  const matched = await validator.check();

  if (!matched) {
    const error = Object.values(validator.errors)[0].message;
    return res.status(200).json({ success: false, message: error });
  }

  const { name } = req.body;

  try {
    const data = await NameModel.create({ name });

    return res
      .status(201)
      .json({ success: true, message: "Save success", data });
  } catch (error) {
    next(error);
  }
};
// -----------------------------------------------------logIn---------------------------------------------------
exports.getName = async (req, res, next) => {
  try {
    const data = await NameModel.findOne({
      order: [["createdAt", "DESC"]],
      attributes: ["name"],
    });

    return res.status(200).json({
      success: true,
      message: "Recent name",
      data,
    });
  } catch (error) {
    next(error);
  }
};
