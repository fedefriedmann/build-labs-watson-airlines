const Airline = require("../schemas/airlines.schema");

async function allAirlines(){
    const airlines = await Airline.find({});
    return airlines;
}

module.exports = {allAirlines}