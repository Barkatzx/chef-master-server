const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

const chefRecipe = require('./data/chefRecipe.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Chef Recipe hunter is running')
})

app.get('/recipes', (req, res) => {
  res.json(chefRecipe);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
