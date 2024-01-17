//Here Sequelize is class which used to define a database it have a properties and  datatypes have a datatypes
require("dotenv").config();
const Sequelize = require("sequelize").Sequelize;
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_ROOT,
  process.env.PASSWORD,
  {
    dialectOptions: { decimalNumbers: true },
    host: process.env.HOST,
    dialect: "mysql",
    pool: { max: 5, min: 0, idle: 10000 },
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("'Connection has been established successfully.");
  })
  .catch((error) => {
    console.log("Unable to connect to the database:" + error);
  });

module.exports = sequelize;
