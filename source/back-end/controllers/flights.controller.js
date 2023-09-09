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

async function seachingIDflight(FlightID){
    const searchid = await Flight.findById(FlightID)
    return searchid
}

module.exports = {allFlights, searchingIATAFlight, searchingDATEflight, seachingIDflight}
