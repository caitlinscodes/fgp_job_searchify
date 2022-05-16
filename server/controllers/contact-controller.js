const { Contact } = require('../models');

module.exports = {
  async createContact({ body }, res) {
    const contact = await Contact.create(body);

    if (!contact) {
      return res.status(400).json({ message: 'Unable to create contact' });
    }

    res.status(200).json(contact);
  },
  
  async getAllContacts(req, res) {
    const allContacts = await Contact.find({});

    if (!allContacts) {
      return res.status(400).json({ message: 'No contacts found' });
    }

    res.status(200).json(allContacts);
  },

  async getContactById({ params }, res) {
    const singleContact = await Contact.findById(params.id);

    if (!singleContact) {
      return res.status(400).json({ message: 'No contact found by that id' });
    }

    res.status(200).json(singleContact);
  },
};
