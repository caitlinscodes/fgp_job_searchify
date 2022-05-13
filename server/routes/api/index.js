const router = require('express').Router();
const sampleRoutes = require('./sample-routes');
const jobRoutes = require('./job-routes');

router.use('/sample', sampleRoutes);
router.use('/job', jobRoutes);

module.exports = router;
