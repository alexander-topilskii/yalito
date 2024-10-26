/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
/* eslint-disable */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.updateInviteCounter = functions.https.onRequest(async (req, res) => {
  // Получите идентификатор из URL (например, /invite/123)
  const inviteId = req.path.split('/').pop();

  if (!inviteId) {
    return res.status(400).send('Missing invite ID');
  }

  try {
    const inviteRef = admin.firestore().collection('invites').doc(inviteId);

    // Инкрементируйте значение счетчика
    await inviteRef.set(
      { count: admin.firestore.FieldValue.increment(1) },
      { merge: true }
    );

    res.status(200).send('Counter updated');
  } catch (error) {
    console.error('Error updating counter:', error);
    res.status(500).send('Internal Server Error');
  }
});