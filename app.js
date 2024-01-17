const express = require("express");
require("dotenv").config();
const sequelize = require("./utils/database");
const app = express();
const cors = require("cors");

sequelize.sync({ alter: true }).then(() => {
  console.log("All models are connected successfully.");
});

app.use(express.urlencoded({ limit: "5000mb" }));
app.use(express.raw({ limit: "5000mb" }));
app.use(express.json({ limit: "5000mb" }));
app.use(cors());

const nameRouter = require("./routers/name_router");
app.use("/api/name", nameRouter);

app.use((error, req, res, next) => {
  console.log("ERROR::", error.message);
  // if (error instanceof multer.MulterError) {
  //   // Multer error handling
  //   return res.status(400).json({ error: error.message });
  // }
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ success: false, message: message });
});

// it will execute when the req path not found
app.use("*", (req, res, next) => {
  res.status(404).json({
    message: "end point not found",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Sever is running on port ${process.env.PORT}`);
});
