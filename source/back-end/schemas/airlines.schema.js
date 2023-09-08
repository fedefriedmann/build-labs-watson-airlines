const mongoose = require('mongoose');

const airlines_schema = new mongoose.Schema({
  IATA_CODE: { type: String, required: true},
  AIRLINE: { type: String, required: true},
});

const Airline = mongoose.model('Airline', airlines_schema);

module.exports = Airline;