import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import publications from './data/publications.js';

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/publications', (req, res) => {
  res.json(publications);
});

app.get('/api/publications/:slug', (req, res) => {
  const publication = publications.find(p => p.slug === req.params.slug);
  res.json(publication);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
