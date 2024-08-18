const express = require("express");
const router = express.Router();
const {
  getHouses,
  setHouse,
  updateHouse,
  deleteHouse,
} = require("../controllers/houseControllers");

router.route("/").get(getHouses).post(setHouse);

router.route("/:id").put(updateHouse).delete(deleteHouse);

module.exports = router;
