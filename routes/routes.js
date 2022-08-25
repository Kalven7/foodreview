import express from 'express';
import user from './user.router.js';
import restaurant from './restaurant.router.js';
import review from './review.router.js';
import login from './login.router.js';

const router = express.Router();

router.use('/user', user);
router.use('/restaurant', restaurant);
router.use('/review', review);
router.use('/login', login);

export default router;