import {
  addExpense,
  removeExpense,
  editExpense,
  startAddExpense,
} from "../../actions/expense";
import configMockStor from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase-101";

test("should setup remove action object", () => {
  const result = removeExpense({ id: "123456" });
  expect(result).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123456",
  });
});

test("should setup add expense action object from provided values ", () => {
  const providedValues = {
    description: "rent",
    amount: 2500,
    createdAt: 1000,
    note: "",
  };
  const action = addExpense(providedValues);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "rent",
      amount: 2500,
      createdAt: 1000,
      note: "",
    },
  });
});

test("should setup add expense action object from default value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      // id: expect.any(String),
      // description: "",
      // amount: 0,
      // createdAt: 0,
      // note: "",
    },
  });
});

const createStore = configMockStor([thunk]);

test("should add expense to database and store", (done) => {
  const store = createStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is better",
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    })
    .catch((e) => {
      console.log(e);
    });
});
console.log("api key", process.env.FIREBASE_API_KEY);

test("should setup startaddexpense from default", (done) => {
  const store = createStore({});
  const expense = {
    description: "",
    amount: 0,
    createdAt: 0,
    note: "",
  };

  store
    .dispatch(startAddExpense(expense))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          ...expense,
          id: expect.any(String),
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expense);
      done();
    });
});
