const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json'); 

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

exports.createRideRequest = async (req, res) => {
  const { userId, pickup, drop, timestamp } = req.body;
  if (!userId || !pickup || !drop || !timestamp) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const rideData = {
      userId,
      pickup,
      drop,
      timestamp,
      status: "requested",
    };

    const docRef = await db.collection('rideRequests').add(rideData);

    res.json({ message: "Ride requested successfully", rideId: docRef.id });
  } catch (error) {
    console.error("Error saving ride:", error);
    res.status(500).json({ error: "Failed to request ride" });
  }
};
