const express = require('express');
const app = express();

const PORT = 3000;

app.use('/public', express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req, res) => {
  res.send('Movies');
});

app.get('/movies/add', (req, res) => {
  res.send();
});

app.get('/movies/:id', (req, res) => {
  res.send('Movies ' + req.params.id);
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});