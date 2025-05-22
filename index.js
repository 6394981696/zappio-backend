const express = require('express');
const admin = require('firebase-admin');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const rideRoutes = require('./routes/ride.routes');

dotenv.config();

const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_PATH);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/ride', rideRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
module.exports = { db };
