const router = require("express").Router();
const { saveName, getName } = require("../controllers/name_controller");

router.post("/saveName", saveName);
router.get("/getName", getName);

module.exports = router;
