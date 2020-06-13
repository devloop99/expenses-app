import * as firebase from "firebase";
import expenses from "../tests/fixtures/expenses";
const Config = {
  apiKey: "AIzaSyC0J2s9YnrRc98mq-YGiaC7zKU_jgpSvXM",
  authDomain: "expensify-app-f34e4.firebaseapp.com",
  databaseURL: "https://expensify-app-f34e4.firebaseio.com",
  projectId: "expensify-app-f34e4",
  storageBucket: "expensify-app-f34e4.appspot.com",
  messagingSenderId: "1071475044836",
  appId: "1:1071475044836:web:4af743ead4c5bafb22d7f1",
  measurementId: "G-HWWTSGS1CF",
};
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
