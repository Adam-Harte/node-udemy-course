const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'Users Page',
    users: users
  });
});

app.post('/users', (req, res, next) => {
  users.push({ username: req.body.username });
  res.redirect('/users');
});

app.get('/', (req, res, next) => {
  res.render('home', {
    pageTitle: 'Home Page'
  });
});

app.listen(3000);
