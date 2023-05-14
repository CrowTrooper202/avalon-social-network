const router =require('express').Router();
const userRoutes =require('./userRoutes');
const thoughtroute =require('./thoughtRouts');

router.user('/users', userRoutes);
router.use('/thoughts', thoughtroute)

module.exports =router