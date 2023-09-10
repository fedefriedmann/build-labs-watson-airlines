const Flight = require("../schemas/flights.schema");

async function allFlights(){
    const flights = await Flight.find({});
    return flights;
}
  
async function searchingIATAFlight(IATA_Origin, IATA_Arrival){
    const flight = await Flight.find({ORIGIN_AIRPORT: IATA_Origin, DESTINATION_AIRPORT: IATA_Arrival})
    return flight
}

async function searchingDATEflight(DepartureDateFlight){
    const dateflight = await Flight.find({DEPARTURE_DATE : DepartureDateFlight})
    return dateflight
}

async function searchingIDflight(FlightID) {
      const searchResult = await Flight.findById(FlightID);
      return searchResult
  }

module.exports = {allFlights, searchingIATAFlight, searchingDATEflight, searchingIDflight}
