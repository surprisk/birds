const admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

// -- Firebase initialization
module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;