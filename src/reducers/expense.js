const defaultState = {
  expenses: [],
  filters: {
    text: "",
    description: "",
    note: "",
    createdAt: undefined,
  },
};

const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);

    case "EDIT_EXPENSE":
      return state.map((el) => {
        if (el.id === action.id) {
          return {
            ...el,
            ...action.expense,
          };
        }

        return el;
      });

    default:
      return state;
  }
};

export default expenseReducer;
