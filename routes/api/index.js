const router =require('express').Router();
const userRoutes =require('./userRoutes');
const thoughtroute =require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtroute)

module.exports =router