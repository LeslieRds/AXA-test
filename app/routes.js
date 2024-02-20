const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API REST');
});

app.get('/api/stocks', (req, res) => {
  const stocks = [
    { id: 1, name: 'Stock A', value: '100' },
    { id: 2, name: 'Stock B', value: '200' }
  ];
  res.json(stocks);
});

app.post('/api/stocks', (req, res) => {
  console.log(req.body);
  res.status(201).send('Stock ajouté');
});

app.put('/api/stocks/:id', (req, res) => {
  console.log(`Mise à jour du stock avec l'id ${req.params.id}`);
  res.send(`Stock avec l'id ${req.params.id} mis à jour`);
});

app.delete('/api/stocks/:id', (req, res) => {
  console.log(`Suppression du stock avec l'id ${req.params.id}`);
  res.send(`Stock avec l'id ${req.params.id} supprimé`);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
