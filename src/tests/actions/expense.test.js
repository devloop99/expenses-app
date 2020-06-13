import { addExpense, removeExpense, editExpense } from "../../actions/expense";

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
      id: expect.any(String),
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
      id: expect.any(String),
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
    },
  });
});
