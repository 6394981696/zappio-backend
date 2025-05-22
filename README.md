# Zappio Backend

## Project Overview
This is the backend server for the Zappio app, built with Node.js, Express, and Firebase Firestore for data storage. It provides APIs for ride requests and user authentication.

## Features
- User authentication with middleware protection
- Ride request creation and storage in Firestore
- Integration with Firebase Admin SDK
- Secure and scalable API endpoints

## Prerequisites
- Node.js (version 14 or higher recommended)
- Firebase project with service account credentials
- npm or yarn package manager

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/6394981696/zappio-backend.git
   cd zappio-backend
.env
PORT=3000
FIREBASE_SERVICE_ACCOUNT_PATH=./serviceAccountKey.json
AUTH_TOKEN=mysecrettoken

#Run the server
npm run dev
