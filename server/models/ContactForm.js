const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    isEmail: true
  },
  contact_text: {
    type: String,
    required: true
  },
  // subscribe: {
  //   type: Boolean,
  //   required: false,
  //   default: false
  // }
});

const Contact = model('contact', contactSchema);
module.exports = Contact;
