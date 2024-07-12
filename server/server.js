const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/recipes', (req, res) => {
  
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading database:', err);
      res.status(500).json({ error: 'Failed to read database.' });
      return;
    }
    const recipes = JSON.parse(data).recipes;
    res.json(recipes);
  });
});


app.get('/api/recipes/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading database:', err);
      res.status(500).json({ error: 'Failed to read database.' });
      return;
    }
    const recipes = JSON.parse(data).recipes;
    const recipe = recipes.find(recipe => recipe.id === recipeId);
    if (!recipe) {
      res.status(404).json({ error: 'Recipe not found.' });
      return;
    }
    res.json(recipe);
  });
});


app.post('/api/recipes', (req, res) => {
 
  res.status(501).json({ error: 'Not Implemented' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
