const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

router.use('/User', userRoutes);
router.use('/Thoughts', thoughtsRoutes);

module.exports = router;
