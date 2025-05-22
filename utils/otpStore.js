const otpStore = {};

function saveOtp(phone, otp) {
  otpStore[phone] = otp;
}

function verifyOtp(phone, otp) {
  return otpStore[phone] === otp;
}

function clearOtp(phone) {
  delete otpStore[phone];
}

module.exports = { saveOtp, verifyOtp, clearOtp };
