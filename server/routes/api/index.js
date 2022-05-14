const router = require('express').Router();
const auth = require('./auth');
const private = require('./protected-routes');

router.use('/auth', auth);
// const contactRoutes = require('./contact-routes');
router.use('/private', private);
// const sampleRoutes = require('./sample-routes');
const jobRoutes = require('./job-routes');

router.use('/contact', contactRoutes);
router.use('/job', jobRoutes);

module.exports = router;
