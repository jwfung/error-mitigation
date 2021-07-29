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
  errcount: {
    type: Number,
    required: false
  },
  cartcount: {
    type: Number,
    required: false
  },
  quest: {
    type: Array,
    required: false
  }
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
});

UserSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = User = mongoose.model('user', UserSchema);