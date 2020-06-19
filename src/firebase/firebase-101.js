import * as firebase from "firebase";
import expenses from "../tests/fixtures/expenses";
const Config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
console.log({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
});

firebase.initializeApp(Config);

const database = firebase.database();

export { firebase, database as default };

// const arr = expenses.map((el) => {
//   return {
//     description: el.description,
//     note: el.note,
//     amount: el.amount,
//     createdAt: el.createdAt,
//   };
// });

// arr.forEach((el) => {
//   database.ref("expenses").push(el);
// });

// database.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
// });
