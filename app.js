const express = require('express');
const app = express();

const PORT = 3000;

app.use('/public', express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req, res) => {
  const frenchMovies = [
    { title: 'Title 1' },
    { title: 'Title 2' },
    { title: 'Title 3' },
    { title: 'Title 4' },
    { title: 'Title 5' },
    { title: 'Title 6' },
  ];
  res.render('movies', {
    movies: frenchMovies
  });
});

app.get('/movies/add', (req, res) => {
  res.send();
});

app.get('/movies/:id', (req, res) => {
  res.render('movie-details', {
    id: req.params.id
  });
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});