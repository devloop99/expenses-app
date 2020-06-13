import expenseReducer from "../../reducers/expense";
import expenses from "../fixtures/expenses";

test("should expense reducer render default ", () => {
  const result = expenseReducer(undefined, { type: "@@INIT" });
  expect(result).toEqual([]);
});
test("should expense reducer remove expense width id ", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const result = expenseReducer(expenses, action);
  expect(result).toEqual([expenses[0], expenses[2]]);
});
test("shouldn't expense reducer remove expense ", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1,
  };
  const result = expenseReducer(expenses, action);
  expect(result).toEqual(expenses);
});
test("should expense reducer add expense ", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: 654,
      description: "new",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  };
  const result = expenseReducer(expenses, action);
  expect(result).toEqual([...expenses, action.expense]);
});

test("should expense reducer edit expense ", () => {
  const expense = {
    description: "test worked",
    amount: 2500,
    note: "",
    createdAt: 0,
  };

  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    expense,
  };
  const result = expenseReducer(expenses, action);
  expect(result).toEqual([{ ...expense, id: 1 }, expenses[1], expenses[2]]);
});
test("should expense reducer not edit expense ", () => {
  const expense = {
    description: "test worked",
    amount: 2500,
    note: "",
    createdAt: 0,
  };

  const action = {
    type: "EDIT_EXPENSE",
    id: 654,
    expense,
  };
  const result = expenseReducer(expenses, action);
  expect(result).toEqual(expenses);
});
