const path = require("path");
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
//llamado a la config de mongodb
const mongo = require("./config/config.mongodb");
//definiendo llamado a controllers
const airlines = require("./controllers/airlines.controller");
const flights = require("./controllers/flights.controller");
const airports = require("./controllers/airports.controller");

async function main(){

    // solicito al archivo .env los datos para la conexion con DB alojada en IBM
    require("dotenv").config({path: path.resolve(__dirname,".env")});

    // realizo la conexion a la DB con el config
    const { create_connection } = require("./config/config.mongodb");
    await create_connection();
    const app = express()
    app.use(cors());

    // Rutas
    app.get('/', (req, res) => {
        res.send('Welcome to Watson Airlines! Watson Airlines is a one of the largest airlines in America. With over 30 years of history, we connect people to opportunities while expanding the understanding of our planet and the people within it. We offer our one-of-a-kind value and Hospitality at over 50 airports across more than 15 countries. In addition, we are members of the International Air Transport Association (IATA), a trade association that represents over 300 airlines, equivalent to about 83% of total air traffic. This allows us to operate safely, securely, efficiently, and economically under clearly defined rules. We are pioneers in the usage of technology, and actively advocate for its usage to improve our customers experience.');
      });


      //creando las ruta para que el usuario acceda a la lista de aerolineas 
      app.get('/airlines', async (req, res) => {
        try {
          const searchAirlines = await airlines.allAirlines();
          res.json(searchAirlines);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error al obtener la lista de aerolíneas' });
        }
      });

            //creando las ruta para que el usuario acceda a la lista de vuelos 
    app.get('/flights', async (req, res) => {
      try {
        const searchFlights = await flights.allFlights();
        res.json(searchFlights);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error al obtener la lista de vuelos' });
        }
      });
      //creando la busqueda por iata
    app.get("/search_iata_flight/:iata_origin/:iata_arrival", async (req, res) => {
      try {

        const iata_origin = req.params.iata_origin;
        const iata_arrival = req.params.iata_arrival;

        const findIATAflight = await flights.searchingIATAFlight(iata_origin, iata_arrival);
        res.json(findIATAflight);
        }
      catch (error) {
        console.error(error);
        res.status(500).json({error: "Error al buscar vuelo por IATA"})
        }
    });

          //creando la busqueda por fecha
          app.get("/search_date_flight/:date_flight", async (req, res) => {
            try {
      
              const date_flight = req.params.date_flight;
      
              const searchingDATEofFlight = await flights.searchingDATEflight(date_flight);
              res.json(searchingDATEofFlight);
              }
            catch (error) {
              console.error(error);
              res.status(500).json({error: "Error al buscar vuelo por Fecha"})
              }
          });
               //creando las ruta para que el usuario acceda a la lista de aeropuertos 
    app.get('/airports', async (req, res) => {
      try {
        const searchAirports = await airports.allAirports();
        res.json(searchAirports);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error al obtener la lista de Aeropuertos' });
        }
      });

      //creando la ruta para que el usuario pueda buscar por id
      app.get("/searchflightid/:id", async (req,res) => 
         {
          const id_flight = req.params.id_flight;

          const searchingFlightByID = await flights.seachingIDflight(id_flight);
          res.json(searchingFlightByID);
      });
    



const PORT = 30120;
app.listen(PORT, () => {
  console.log(`Servidor Node.js en funcionamiento en el puerto ${PORT}`);
});

}

main();