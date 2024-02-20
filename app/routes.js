const express = require("express");
const router = express.Router();

module.exports = () => {
  const router = new express.Router();

  router.get("/", function(req, res) {
    res.send("Hello World");
  });

  router.get('/example', (req, res) => {
    res.json({ message: "Ceci est un exemple de route API." });
  });

  module.exports = router;

  return router;
};
