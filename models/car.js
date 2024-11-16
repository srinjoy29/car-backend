const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    carName: {
      type: String,
      required: true,
      trim: true,
    },
    modelName: {
      type: String,
      required: true,
      trim: true,
    },
    buyDate: {
      type: Date,
      required: true,
    },
    buyPrice: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    tags: {
      type: [String],
      validate: [arrayLimit, "You can only upload up to 10 tags."],
    },
    images: {
      type: [String],
      validate: [arrayLimit, "You can only upload up to 10 images."],
    },
  },
  {
    timestamps: true,
  }
);

function arrayLimit(val) {
  return val.length <= 10;
}

module.exports = mongoose.model("Car", carSchema);
