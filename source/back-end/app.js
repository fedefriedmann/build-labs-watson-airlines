const path = require("path");
const mongoose = require('mongoose');
//llamado a la config de mongodb
const mongo = require("./config/config.mongodb");
//definiendo llamado a controllers
const airlines = require("./controllers/airlines.controller");
const flights = require("./controllers/flights.controller")

async function main(){

    // solicito al archivo .env los datos para la conexion con DB alojada en IBM
    require("dotenv").config({path: path.resolve(__dirname,".env")});

    // realizo la conexion a la DB con el config
    const { create_connection } = require("./config/config.mongodb");
    await create_connection();    

    
    
}

main();