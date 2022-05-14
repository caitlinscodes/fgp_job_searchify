const router = require('express').Router();
const auth = require('./auth');
const private = require('./protected-routes');

router.use('/auth', auth);
router.use('/private', private);
const sampleRoutes = require('./sample-routes');
const jobRoutes = require('./job-routes');

router.use('/sample', sampleRoutes);
router.use('/job', jobRoutes);

module.exports = router;
