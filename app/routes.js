const express = require("express");
const generateStockData = require('../api');

module.exports = () => {
  const app = new express.Router();

  // Route pour obtenir les données des stocks
  app.get('/', function(req, res) {
    res.send('hello world');
  });

  app.get("/stocks", function(req, res) {
    const data = generateStockData();
    res.json(data.stocks);
  });

  app.post("/update", function(req, res) {
    res.json({ message: "Données mises à jour avec succès" });
  });

  return app;
};
