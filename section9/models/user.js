const mongodb = require('mongodb');

const getDb = require('../util/database').getDb;

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart;
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items
      .findIndex(
        cp => cp.productId.toString() === product._id.toString()
      );
    let newQauntity = 1;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex  >= 0) {
      newQauntity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: new mongodb.ObjectId(product._id),
        quantity: newQauntity
      });
    }

    const updatedCart = { items: updatedCartItems };
    const db = getDb();
    return db.collection('users').updateOne(
      { id: new mongodb.ObjectId(this._id) },
      { $set: {
          cart: updatedCart
        }
      })
  }

  static findById(userId) {
    db = getDb();
    return db.collection('users').find({ _id: new mongodb.ObjectId(userId) })
  }
}

module.exports = User;
