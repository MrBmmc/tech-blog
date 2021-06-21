const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashRoutes = require('./dashRoutes');

router.use('/home', homeRoutes);
router.use('/dashboard', dashRoutes);

module.exports = router;