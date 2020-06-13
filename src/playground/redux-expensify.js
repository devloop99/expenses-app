import ReduxStore from "../store/settingStore";
import { addExpense, removeExpense, editExpense } from "../actions/expense";
import {
  setText,
  setStartDate,
  setEndDate,
  SortByDate,
  SortByAmount,
} from "../actions/filter";
import getVisible from "../selectors/expenses";
const store = ReduxStore();

store.subscribe(() => {
  const expense = store.getState();

  const result = getVisible(expense.expenses, expense.filters);
  console.log(result);
});

const expenseOne = store.dispatch(
  addExpense({
    description: "abonnement",
    note: "this my note",
    amount: 200,
    createdAt: 20000,
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    description: "monix",
    note: "this my note",
    amount: 280,
    createdAt: 15000,
  })
);

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 600 }));

store.dispatch(setText("note"));
store.dispatch(SortByDate());
store.dispatch(setStartDate(0));
store.dispatch(SortByAmount());
store.dispatch(setEndDate(20000000));

store.dispatch(addExpense({ description: "gas bill" }));
store.dispatch(addExpense({ description: "water bill" }));
store.dispatch(setText());
store.dispatch(setEndDate(15000));
// store.dispatch(setStartDate());
