// models/Book.js

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const UserSchema = new mongoose.Schema({
  latinsqr: {
    type: Number,
    required: false
  },
  cart: {
    type: Array,
    required: false
  },
  cartOrder: {
    type: Array,
    required: false
  },
  sess: {
    type: Number,
    required: false
  },
  uuid: {
    type: String,
    required: false
  },
  demo: {
    type: Array,
    required: false
  },
  part:  {
    type: Array,
    required: false
  },
  // errcount: {
  //   type: Number,
  //   required: false
  // },
  // cartcount: {
  //   type: Number,
  //   required: false
  // },
  quest: {
    type: Array,
    required: false
  },
  prequest: {
    type: Array,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);