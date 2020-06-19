import database from "../firebase/firebase-101";

export const addExpense = (expense = {}) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expense) => {
  return (dispatch) => {
    const { description = "", note = "", amount = 0, createdAt = 0 } = expense;
    expense = { description, amount, note, createdAt };
    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(addExpense({ id: ref.key, ...expense }));
      });
  };
};
export const removeExpense = ({ id }) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

export const startRemoveExpense = ({ id }) => {
  console.log("im called");
  return (dispatch) => {
    database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const editExpense = (expense, id) => ({
  type: "EDIT_EXPENSE",
  id,
  expense,
});

export const startEditExpense = (expense, id) => {
  return (dispatch) => {
    console.log(expense);

    database
      .ref(`expenses/${id}`)
      .update(expense)
      .then(() => {
        dispatch(editExpense(expense, id));
      });
  };
};
