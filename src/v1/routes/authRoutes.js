const express = require('express');

const { register, signIn } = require('../../controllers/authController');

const router = express.Router();

router.post('/', signIn);
router.post('/', register);

module.exports = router;
