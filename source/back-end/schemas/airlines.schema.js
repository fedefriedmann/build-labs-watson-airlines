const mongoose = require('mongoose');

const airlinesSchema = new mongoose.Schema({
  IATA_CODE: String,
  AIRLINE: String,
});

const Airline = mongoose.model('Airline', airlinesSchema);

module.exports = Airline;