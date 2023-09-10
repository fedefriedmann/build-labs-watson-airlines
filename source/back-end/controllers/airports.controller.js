const Airport = require("../schemas/airports.schema");

async function allAirports(){
    const airports = await Airport.find({});
    return airports;
}

async function airportSearchID(id){
    const airports = await Airport.findById(id);
    return airports;
}

module.exports = {allAirports, airportSearchID}