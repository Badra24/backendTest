const express = require("express");
const router = express.Router();

const { tabelJabatanPegawaiContorller } = require("../controller");

router.get("/:id", tabelJabatanPegawaiContorller.getGpsById);

router.get("/", tabelJabatanPegawaiContorller.getAllgps);

router.post("/add", tabelJabatanPegawaiContorller.addGps);

module.exports = router;
