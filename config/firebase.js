// CONFIGURAÇÃO FIREBASE REALTIME DATABASE
const admin = require("firebase-admin");

// Agora usamos variáveis de ambiente em vez do arquivo JSON local
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    // O replace é necessário para o Render ler a chave privada corretamente
    privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
  }),
  databaseURL: "https://nodejs-e6c74-default-rtdb.firebaseio.com/"
});

const db = admin.database();

module.exports = db;
