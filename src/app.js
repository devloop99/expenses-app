import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { Provider } from "react-redux";
import AppStore from "./store/settingStore";
import { addExpense } from "./actions/expense";
import "./firebase/firebase-101";

const store = AppStore();

// const init = () => {
//   const fetchedData = JSON.parse(localStorage.getItem("data"));
//   if (fetchedData) {
//     fetchedData.expenses.forEach((el) => {
//       store.dispatch(
//         addExpense({
//           description: el.description,
//           note: el.note,
//           amount: el.amount,
//           createdAt: el.createdAt,
//         })
//       );
//     });
//   }
// };
// init();

// store.dispatch(
//   addExpense({
//     description: "abonnement",
//     note: "this my note",
//     amount: 200,
//     createdAt: 20000,
//   })
// );
// store.dispatch(
//   addExpense({
//     description: "minox",
//     note: "this my note",
//     amount: 300,
//     createdAt: 40000,
//   })
// );
// store.dispatch(
//   addExpense({
//     description: "water bill",
//     note: "this my note",
//     amount: 5000,
//     createdAt: 700000,
//   })
// );
// store.dispatch(
//   addExpense({
//     description: "gas bill",
//     note: "this my note",
//     amount: 3050,
//     createdAt: 40400,
//   })
// );

store.subscribe(() => {
  // const data = JSON.stringify(store.getState());
  // localStorage.setItem("data", data);
  console.log(store.getState());
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
