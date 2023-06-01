var mongoose = require("mongoose");

var areaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      intl: true,
    },
    level: Number,
    area_code: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    parent_id: {
      type: String,
      trim: true,
    },
    area_group: String,
    sdmx_area_gid: String,
    status: Number,
  },
  { timestamps: true }
);

var Area = mongoose.model("Area", areaSchema, "area");
module.exports = Area;
