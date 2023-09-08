const mongoose = require('mongoose');

const airports_schema = new mongoose.Schema({
  IATA_CODE : {type : String, required: true },
  AIRPORT : {type : Number, required: true},
  CITY : {type: String, required : true},
  STATE : {type : String},
  COUNTRY : {type: String, required: true},
});

const Airport = mongoose.model("Airport", airports_schema);

module.exports = Airport;