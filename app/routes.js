const express = require("express");
const generateStockData = require('../api');

module.exports = () => {
  const app = new express.Router();

  // Route pour obtenir les données des stocks
  app.get('/route', (req, res) => {
    res.send('Hello World');
  });

  app.get('/route', someUndefinedFunction);


  app.post("/update", function(req, res) {
    res.json({ message: "Données mises à jour avec succès" });
  });

  return app;
};
