const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) => {
  MongoClient.connect(
    'mongodb+srv://adamharte:QPR4life@cluster0.yjx2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      cb(client);
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = mongoConnect;
