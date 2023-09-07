const mongoose = require('mongoose');

const sample_schema = new mongoose.Schema({
  IATA_CODE : String,
  AIRPORT : Number,
  CITY : String,
  STATE : String,
  COUNTRY : String,
});

const Sample = mongoose.model("Sample", sample_schema);

module.exports = Sample;