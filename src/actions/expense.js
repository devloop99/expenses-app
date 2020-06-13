import database from "../firebase/firebase-101";

export const addExpense = (expense = {}) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expense) => {
  console.log("added");
  return (dispatch) => {
    const { description = "", note = "", amount = 0, createdAt = 0 } = expense;
    expense = { description, amount, note, createdAt };
    database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(addExpense({ id: ref.key, ...expense }));
      });
  };
};
export const removeExpense = ({ id }) => {
  console.log(id, "deleted");
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

export const editExpense = (expense, id) => ({
  type: "EDIT_EXPENSE",
  id,
  expense,
});
