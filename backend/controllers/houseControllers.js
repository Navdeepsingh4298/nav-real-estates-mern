const asyncHandler = require("express-async-handler");
const House = require("../models/houseModel");

// @desc      Get houses
// @route     GET /api/houses
// @access    Private
const getHouses = asyncHandler(async (req, res) => {
  const houses = await House.find();

  res.status(200).json(houses);
});

// @desc      Set house
// @route     POST /api/houses
// @access    Private
const setHouse = asyncHandler(async (req, res) => {
  if (!req.body.ownerName) {
    res.status(400);
    throw new Error("Please enter owner name field");
  }

  const house = await House.create({
    ownerName: req.body.ownerName,
    location: req.body.location,
    address: req.body.address,
    houseArea: req.body.houseArea,
    houseType: req.body.houseType,
    housePrice: req.body.housePrice,
  });

  res.status(200).json(house);
});

// @desc      Update house
// @route     PUT /api/houses
// @access    Private
const updateHouse = asyncHandler(async (req, res) => {
  const house = await House.findById(req.params.id);

  if (!house) {
    res.status(400);
    throw new Error("House not found");
  }

  const updatedHouse = await House.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedHouse);
});

// @desc      Delete house
// @route     DELETE /api/houses
// @access    Private
const deleteHouse = asyncHandler(async (req, res) => {
  const house = await House.findById(req.params.id);

  if (!house) {
    res.status(400);
    throw new Error("House not Found");
  }

  await House.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getHouses,
  setHouse,
  updateHouse,
  deleteHouse,
};
