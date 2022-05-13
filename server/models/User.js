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
    minlength: 6
  },

});
userSchema.pre('save', async function() {
  if (!this.isModified("password")) {
    next()
  } 
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
  next();
});

const User = model('User', userSchema);
module.exports = User;
