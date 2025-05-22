module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log('Received token:', token); // debugging ke liye
  if (!token || token !== `Bearer ${process.env.AUTH_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

