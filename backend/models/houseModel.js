const mongoose = require("mongoose");

const houseSchema = mongoose.Schema(
  {
    ownerName: {
      type: String,
      require: [true, "Please enter Owner's name"],
    },

    location: {
      type: Number,
      require: [true, "Please enter exact location coordinates"],
    },
    address: {
      type: String,
      require: [true, "Please enter full house address"],
    },
    houseArea: {
      type: Number,
      require: [true, "Please enter house area"],
    },
    houseType: {
      type: Number,
      require: [true, "Please enter house type like for rent, for sale"],
    },
    housePrice: {
      type: Number,
      require: [true, "Please enter Price"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("House", houseSchema);
