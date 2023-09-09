const express = require("express");
const router = express.Router();
const controller = require("../controllers/airports.controller");

router.get("/airports", controller.getAirports);

      //creando las ruta para que el usuario acceda a la lista de aeropuertos 
      app.get('/airports', async (req, res) => {
        try {
          const airports = await airports.find();
          res.json(airports);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error al obtener la lista de aeropuertos' });
        }
      });

module.exports = router;