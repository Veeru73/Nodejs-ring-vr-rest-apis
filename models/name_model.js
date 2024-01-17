const sequelize = require("../utils/database");
const DataTypes = require("sequelize").DataTypes;
const model = sequelize.define(
  "name",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

module.exports = model;
