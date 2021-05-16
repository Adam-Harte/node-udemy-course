const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    'mongodb+srv://adamharte:QPR4life@cluster0.yjx2f.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      cb();
    })
    .catch(err => {
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
