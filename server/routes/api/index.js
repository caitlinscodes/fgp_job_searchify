const router = require('express').Router();
const auth = require('./auth');

router.use('/auth', auth);
const contactRoutes = require('./contact-routes');
const jobRoutes = require('./job-routes');

router.use('/contact', contactRoutes);
router.use('/job', jobRoutes);

module.exports = router;
