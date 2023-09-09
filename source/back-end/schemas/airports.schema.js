const mongoose = require('mongoose');

const airportsSchema = new mongoose.Schema({
  IATA_CODE: String,
  AIRPORT: Number,
  CITY: String,
  STATE: String,
  COUNTRY: String,
});

const Airport = mongoose.model("Airport", airportsSchema);

module.exports = Airport;