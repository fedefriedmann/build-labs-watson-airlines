const Flight = require("../schemas/flights.schema");

async function flightSearchOD(originID, destinationID){

    const flights = await Flight.find({ORIGIN_AIRPORT: originID, DESTINATION_AIRPORT: destinationID});
    return flights;

}

async function flightSearchDA(date, airline){

    const flights = await Flight.find({DEPARTURE_DATE: date, AIRLINE: airline});

}

async function flightSearchID(id){

    const flights = await Flight.findById(id);
    return flights;

}

module.exports = {flightSearchOD, flightSearchDA, flightSearchID};