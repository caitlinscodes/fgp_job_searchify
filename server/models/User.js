const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    isEmail: true
  },
  password: {
    type: String,
    required: true,
  },

});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next()
  } 
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
  next();
});

userSchema.methods.matchPasswords = async function( password ) {
  return await bcrypt.compare(password, this.password);
}

userSchema.methods.getSignedToken = function() {
  return jwt.sign({ id: this._is}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
}

const User = model('user', userSchema);
module.exports = User;
