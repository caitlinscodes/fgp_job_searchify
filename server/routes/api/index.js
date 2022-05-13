const router = require('express').Router();
const auth = require('./auth');

router.use('/auth', auth);
const sampleRoutes = require('./sample-routes');
const jobRoutes = require('./job-routes');

router.use('/sample', sampleRoutes);
router.use('/job', jobRoutes);

module.exports = router;
