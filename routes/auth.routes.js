const express = require('express');
const { sendOtp, verifyOtp } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);

router.get('/', (req, res) => {
  res.send('Auth API is up and running!');
});

module.exports = router;
