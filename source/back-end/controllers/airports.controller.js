const Airport = require("../schemas/airports.schema");

async function allAirports(){
    const airports = await Airport.find({});
    return airports;
}

module.exports = {allAirports}