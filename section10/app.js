const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('60a58792277e644148df02cd')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://adamharte:QPR4life@cluster0.yjx2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(result => {
    User.findOne().then(user => {
      const user = new User({
        name: 'Adam',
        email: 'test@test.com',
        cart: {
          items: []
        }
      });
      user.save();
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
