const Flight = require("../schemas/flights.schema");

async function allFlights(){
    const flights = await Flight.find();
    return flights;
}

async function searchingIATAFlight(IATA_Origin, IATA_Arrival){
    const flights = await Flight.find({ORIGIN_AIRPORT: IATA_Origin, DESTINATION_AIRPORT: IATA_Arrival})
    return flights
}

async function searchingDATEflight(DepartureDateFlight){
    const flights = await Flight.find({DEPARTURE_DATE : DepartureDateFlight})
    return flights
}

async function flightSearchID(id){
    const flights = await Flight.findById(id);
    return flights;
}

module.exports = {allFlights, searchingIATAFlight, searchingDATEflight, flightSearchID}
