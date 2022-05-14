const router = require('express').Router();

// Import any controllers needed here
const { getAllContacts, getContactById, createContact } = require('../../controllers/contact-controller');

// Declare the routes that point to the controllers above
router.route('/').get(getAllContacts);
router.route('/').post(createContact);

router.route('/:id').post(getContactById);

module.exports = router;
