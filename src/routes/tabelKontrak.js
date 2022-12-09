const express = require("express");
const router = express.Router();

const { tabelKontrakController } = require("../controller");

router.get("/", tabelKontrakController.getAllgps);
router.get("/:id", tabelKontrakController.getGpsById);

router.post("/add", tabelKontrakController.addGps);

module.exports = router;
