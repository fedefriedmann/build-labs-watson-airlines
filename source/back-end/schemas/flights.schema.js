const mongoose = require('mongoose');

const flightsSchema = new mongoose.Schema({
  AIRLINE: String,
  FLIGHT_NUMBER: Number,
  ORIGIN_AIRPORT: String,
  ARRIVAL_AIRPORT: String,
  CANCELLED: Boolean,
  DEPARTURE_DATE: Date,
  ARRIVAL_DATE: Date,
});

const Flight = mongoose.model("Flight", flightsSchema);

module.exports = Flight;