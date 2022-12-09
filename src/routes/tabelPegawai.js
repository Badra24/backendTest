const express = require("express");
const router = express.Router();

const { tabelPegawaiController } = require("../controller");

router.get("/:id", tabelPegawaiController.getGpsById);

router.get("/", tabelPegawaiController.getAllgps);

router.post("/add", tabelPegawaiController.addGps);
router.patch("/edit", tabelPegawaiController.editPost);
router.delete("/delete", tabelPegawaiController.deletePost);

module.exports = router;
