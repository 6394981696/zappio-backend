const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const { db } = require('../firebase'); // ✅ Import db from firebase.js

async function createRideRequest(req, res) {
  try {
    const rideData = req.body;
    console.log('Received ride request:', rideData);

    const ridesRef = db.collection('rides');
    const docRef = ridesRef.doc();
    await docRef.set(rideData);

    console.log('Ride saved with ID:', docRef.id);
    res.status(201).json({ message: 'Ride requested successfully', id: docRef.id });
  } catch (error) {
    console.error('Error in /api/ride/request:', error);
    res.status(500).json({ error: 'Failed to request ride' });
  }
}

router.post('/request', authMiddleware, createRideRequest);

module.exports = router;
