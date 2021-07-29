// models/Book.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  q3: {
    type: String,
    required: false
  },
  q4: {
    type: String,
    required: false
  },
  q5: {
    type: String,
    required: false
  },
  q6: {
    type: String,
    required: false
  },
  q7: {
    type: String,
    required: false
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);