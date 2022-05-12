const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: String,
    required: true,
    validate: {
      len: [6]
    }
  },

});

const User = model('Sample', sampleSchema);
module.exports = User;
