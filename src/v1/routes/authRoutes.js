const express = require('express');
const rateLimiter = require('express-rate-limit');

const { register, signIn } = require('../../controllers/authController');

const router = express.Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

router.post('/', apiLimiter, signIn);
router.post('/register', apiLimiter, register);

module.exports = router;
