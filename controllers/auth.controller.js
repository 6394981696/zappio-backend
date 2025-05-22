const { saveOtp, verifyOtp, clearOtp } = require('../utils/otpStore');

function generateOtp() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

exports.sendOtp = (req, res) => {
  console.log('sendOtp - Request body:', req.body);
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ error: "Phone number required" });
  }

  const otp = generateOtp();
  saveOtp(phone, otp);
  console.log(`OTP for ${phone} is ${otp}`); // For testing only

  res.json({ message: "OTP sent successfully" });
};

exports.verifyOtp = (req, res) => {
  console.log('verifyOtp - Request body:', req.body);
  const { phone, otp } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({ error: "Phone and OTP required" });
  }

  const isValid = verifyOtp(phone, otp);

  if (!isValid) {
    return res.status(400).json({ error: "Invalid OTP" });
  }

  clearOtp(phone);

  res.json({ userId: `phone_${phone}` });
};
