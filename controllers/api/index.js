const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cardRoutes = require('./cardRoutes');
const collectionRoutes = require('./collectionRoutes');

router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use('/collections', collectionRoutes);

module.exports = router;
