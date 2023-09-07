const mongoose = require('mongoose');

const sample_schema = new mongoose.Schema({
  IATA_CODE : String,
  AIRLINE : Number,
});

const Sample = mongoose.model("Sample", sample_schema);

module.exports = Sample;